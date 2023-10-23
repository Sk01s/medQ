import Stripe from 'stripe';
import { v4 as uuidv4 } from 'uuid'
import jwt from 'jsonwebtoken';
import Order from '../../../models/Order'
import calculateCartTotal from '../../../utils/calculateCartTotal'

const stripe = Stripe(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
    const { paymentData, products } = req.body;
    // console.log(products)

    try {
        const { userId } = jwt.verify(req.headers.authorization, process.env.JWT_SECRET)
        // console.log(userId)
        const {cartTotal, stripeTotal} = calculateCartTotal(products)
        const prevCustomer = await stripe.customers.list({
            email: paymentData.email,
            limit: 1
        });
        const isExistingCustomer = prevCustomer.data.length > 0
        let newCustomer
        if(!isExistingCustomer){
            newCustomer = await stripe.customers.create({
                email: paymentData.email,
                source: paymentData.id
            })
        }
        const customer = (isExistingCustomer && prevCustomer.data[0].id) || newCustomer.id
        await stripe.charges.create({
            currency: "usd",
            amount: stripeTotal,
            receipt_email: paymentData.email,
            customer,
            description: `Checkout | ${paymentData.email} | ${paymentData.id}`
        },{
            idempotencyKey: uuidv4()
        })

        await new Order({
            user: userId,
            email: paymentData.email,
            total: cartTotal,
            products: products
        }).save()

        res.status(200).send("Checkout successful!")
    } catch (error) {
        console.error(error)
        res.status(500).send("Error proccessing charge")
    }
}