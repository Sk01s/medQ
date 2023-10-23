import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';
import Sidebar from '../components/PurchaseGuide/Sidebar';

const TermsOfService = () => {
    return (
        <>
            <PageBanner
                pageTitle="Terms Of Service" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Terms Of Service" 
            />

            <section className="privacy-policy-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12">
                            <div className="terms-of-service-content">
                                <img src="/img/blog/blog-img3.jpg" alt="image" />
                                <p><i>This Terms of Service was last updated on July 1, 2020.</i></p>
                                <h3>1. Our Website</h3>
                                <p>Our website address is: <strong>http://medq.com</strong></p>
                                <p>We collect certain data from you directly, like information you enter yourself, data about your participation in courses, and data from third-party platforms you connect with <strong>MedQ</strong>. We also collect some data automatically, like information about your device and what parts of our Services you interact with or spend time using.</p>
                                <h3>2. Ownership of site agreement to terms of use</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur.</p>
                                <ul>
                                    <li>It has survived not only five centuries, but also the leap into electronic typesetting.</li>
                                    <li>Contrary to popular belief, Lorem Ipsum is not simply random text.</li>
                                    <li>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.</li>
                                    <li>Various versions have evolved over the years, sometimes by accident sometimes on purpose.</li>
                                </ul>
                                <h3>3. Purchases other terms and conditionsPurchases other terms and conditions</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut abore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea com modo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                <h3>4. Legal Disclaimers</h3>
                                <ol>
                                    <li>Responding to your questions and concerns;</li>
                                    <li>Sending you administrative messages and information, including messages from instructors and teaching assistants, notifications about changes to our Service, and updates to our agreements;</li>
                                    <li>Sending push notifications to your wireless device to provide updates and other relevant messages (which you can manage from the “options” or “settings” page of the mobile app);</li>
                                </ol>
                                <h3>5. Limitation of liability</h3>
                                <p>You can choose not to provide certain data to us, but you may not be able to use certain features of the Services.</p>
                                <ul>
                                    <li>To stop receiving promotional communications from us, you can opt out by using the unsubscribe mechanism in the promotional communication you receive or by changing the email preferences in your account. Note that regardless of your email preference settings, we will send you transactional and relationship messages regarding the Services, including administrative confirmations, order confirmations, important updates about the Services, and notices about our policies.</li>
                                    <li>The browser or device you use may allow you to control cookies and other types of local data storage. Your wireless device may also allow you to control whether location or other data is collected and shared. You can manage Adobe’s LSOs through their Website Storage Settings panel.</li>
                                    <li>To get information and control cookies used for tailored advertising from participating companies, see the consumer opt-out pages for the Network Advertising Initiative and Digital Advertising Alliance, or if you’re located in the European Union, visit the Your Online Choices site. To opt out of Google’s display advertising or customize Google Display Network ads, visit the Google Ads Settings page. To opt out of Taboola’s targeted ads, see the Opt-out Link in their Cookie Policy.</li>
                                    <li>To update data you provide directly, log into your account and update your account at any time.</li>
                                </ul>
                                <h3>6. Our Privacy Policy</h3>
                                <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children’s online activities and interests. Children under 13 (or under 16 in the European Economic Area) should not use the Services. If we learn that we’ve collected personal data from a child under those ages, we will take reasonable steps to delete it.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-12">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            <FacilityStyleOne />
        </>
    )
}

export default TermsOfService;