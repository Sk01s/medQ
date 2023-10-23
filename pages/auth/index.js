import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import FacilityStyleOne from '../../components/Common/FacilityStyleOne';
import LoginForm from '../../components/Auth/LoginForm';
import RegisterForm from '../../components/Auth/RegisterForm';

const Index = () => {
    return (
        <>
            <PageBanner
                pageTitle="Welcome to MedQ" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Welcome to MedQ" 
            />

            <section className="profile-authentication-area ptb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <LoginForm />
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <RegisterForm />
                        </div>
                    </div>
                </div>
            </section>
 
            <FacilityStyleOne />
        </>
    )
}

export default Index;