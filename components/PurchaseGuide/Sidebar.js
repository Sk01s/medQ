import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
    return (
        <aside className="widget-area">
            <section className="widget widget_insight">
                <ul>
                    <li>
                        <Link href="/about">
                            <a>About Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact Us</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/purchase-guide">
                            <a>Purchase Guide</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy">
                            <a>Privacy Policy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/terms-of-service">
                            <a>Terms of Service</a>
                        </Link>
                    </li>
                </ul>
            </section>
        </aside>
    )
}

export default Sidebar;