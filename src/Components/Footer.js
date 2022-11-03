import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.svg";
const Footer = () => {
    return (
        <footer className="bg-black/90 py-10 text-white">
            <div className="container footer">
                <div>
                    <img src={logo} alt="" />
                    <p>
                        ACME Industries Ltd.
                        <br />
                        Providing reliable tech since 1992
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link-hover link">Branding</Link>
                    <Link className="link-hover link">Design</Link>
                    <Link className="link-hover link">Marketing</Link>
                    <Link className="link-hover link">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link-hover link">About us</Link>
                    <Link className="link-hover link">Contact</Link>
                    <Link className="link-hover link">Jobs</Link>
                    <Link className="link-hover link">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link-hover link">Terms of use</Link>
                    <Link className="link-hover link">Privacy policy</Link>
                    <Link className="link-hover link">Cookie policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
