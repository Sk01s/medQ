import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import isEmail from 'validator/lib/isEmail'
import isLength from 'validator/lib/isLength'
import connectDb from '../../../utils/connectDb'
import User from '../../../models/User'
// connectDb()
connectDb();

export default async (req, res) => {
    const { name, email, password} = req.body
    try {
        //check email, name, password format
        if (!isLength(name, {min: 3, max: 15})){
            return res.status(422).send("Name must be 3-15 characters long")
        } else if (!isLength(password, {min: 5, max: 15})){
            return res.status(422).send("Password must be 5-15 characters long")
        } else if (!isEmail(email)){
            return res.status(422).send("Email must be valid")
        }

        const user = await User.findOne({ email })
        // console.log("USER###=>", user)
        if (user){
            return res.status(422).send(`User already exist with that ${email}`)
        }

        const passwordHash = await bcrypt.hash(password, 10)
        const newUser = await new User({
            name,
            email,
            password: passwordHash
        }).save()

        const medq_token = jwt.sign({ userId: newUser._id}, process.env.JWT_SECRET, {expiresIn: '7d'})
        res.status(201).json(medq_token)
    } catch (error) {
        // console.error(error)
        res.status(500).send("Error in signup. Please try again.")
    }
}