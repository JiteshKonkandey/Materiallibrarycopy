import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { MdLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";




const Footer = () => { 

    return (
        <>
            {/* <div className="footer"> */}
                <div className="footer-main">
                    <div className="footer-left">
                        <div className="footer-logo">
                            <img src="/images/materiallibrarylogo.png" alt="logo" />
                            <p className='footer-desc'>One stop solution for Construction world</p>
                        </div>

                        <div className="footer-socialmedia">
                            
                            <a href='https://www.facebook.com/materiallibrary.in' target="_blank"><FaFacebookF color="white" className='footer-socialicons'/></a>
                            <a href='https://www.instagram.com/materiallibrarydotin/' target="_blank"><FaInstagram className='footer-socialicons'/></a>
                            <a href='https://www.linkedin.com/company/material-library/' target="_blank"><FaLinkedinIn className='footer-socialicons'/></a>
                            <a href='https://in.pinterest.com/materiallibrarydotin/_saved/' target="_blank"><FaPinterestP className='footer-socialicons'/></a>
                        </div>
                    </div>
                    <div className="footer-mid1">
                        <h2 className='foo-heading'>Products</h2>
                        <div className="footer-links">
                            <Link to="#" className='links-footer'>Terms & Policy </Link>
                            <Link to="#" className='links-footer'>Blog </Link>
                            <Link to="#" className='links-footer'>Pricing </Link>
                            <Link to="#" className='links-footer'>About </Link>
                            <Link to="#" className='links-footer'>Faq </Link>
                            <Link to="#" className='links-footer'>Contact </Link>
                        </div>
                    </div>

                    <div className="footer-mid2">
                            <h2 className='foo-heading'>Quick Links</h2>
                        <div className="footer-links">
                            <Link to="#" className='links-footer'>Terms & Policy </Link>
                            <Link to="#" className='links-footer'>Blog </Link>
                            <Link to="#" className='links-footer'>Pricing </Link>
                            <Link to="#" className='links-footer'>About </Link>
                            <Link to="#" className='links-footer'>Faq </Link>
                            <Link to="#" className='links-footer'>Contact </Link>
                        </div>
                        
                    </div>
                    <div className="footer-right">
                        <h2 className='foo-heading'>Address</h2>
                        <div className='footer-location'>
                            <a href='https://www.google.com/maps/place/Metro+World+Mall/@28.4286299,77.0996827,21z/data=!4m5!3m4!1s0x390d19fac8c0d479:0x69ba8a61e6c7504a!8m2!3d28.4286367!4d77.0996818' target="_blank"><MdLocationOn size="35px" className='footer-fafaicons'/><span> Sector 56, </span>
                            Metro World Mall, Gurugram, Haryana, India</a>
                        </div>
                        <h2 className='foo-heading'>Contact Us</h2>
                        <div className="footer-call">
                            <a href="tel: 9876543210"><IoCall size="35px" className='footer-fafaicons'/> +91-9876543210</a>
                        </div>
                        <div className="footer-mail">
                            <a href="mailto: info@materiallibrary.com"><IoMdMail size="35px" className='footer-fafaicons'/> info@materiallibrary.com</a>
                        </div>

                    </div>

                </div>
                    <div className="copyright">Material Library &copy; All Copyright Reserved 2021</div>
            {/* </div> */}
        </>
    )
}

export default Footer
