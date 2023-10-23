import React from 'react';
import Link from 'next/link';

const Coustom404 = () => {
    return (
        <>
            <section className="error-area ptb-70">
                <div className="container">
                    <div className="error-content">
                        <img src="/img/error.png" alt="image" />
                        <h3>Error 404 : Page Not Found</h3>
                        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Link href="/">
                            <a className="default-btn">
                                <i className="flaticon-left-chevron"></i> Back to Homepage
                            </a>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Coustom404;