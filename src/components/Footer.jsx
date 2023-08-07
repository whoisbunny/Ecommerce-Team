/* eslint-disable no-unused-vars */
import React from "react";

import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div className="container-xxl">
          <div className="row-grid  ">
            <div className="col-md-4 col-lg-4 mb-4 mb-md-0 ">
              <h2 className="footer-title mb-3">
                <b>Contact</b>
              </h2>
              <div className="mb-3">
                <p>
                  <b>Address:</b> Thika town, Naltex building, 2nd floor
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Phone:</b>{" "}
                  <a className="footer-tel" href="tel:+1234567890">
                    Call us at +1 (234) 567-890
                  </a>
                </p>{" "}
              </div>
              <div className="mb-4">
                <p>
                  <b>Hours:</b> From 8 a.m To 6 p.m
                </p>{" "}
              </div>
              <div className="mb-3">
                <p>
                  <b>Follow the developer</b>
                </p>{" "}
              </div>
              <div className="socials d-flex gap-3">



              </div>
            </div>
            <div className=" mb-3 ">
              <h2 className="footer-title mb-3">
                <b>About</b>
              </h2>
              <div className="mb-3">
                {" "}
                <Link to="/about" id="footer-links">
                  About Us
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="checkout" id="footer-links">
                  Delivery
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Privacy Policy</Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Terms & Conditions</Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Fee Policy</Link>{" "}
              </div>
            </div>
            <div className="col-md-2 col-lg-2 mb-3 mb-md-0">
              <h2 className="footer-title mb-3">
                <b>Account</b>
              </h2>
              <div className="mb-3">
                {" "}
                <Link to="/login" id="footer-links">
                  Profile
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="/cart" id="footer-links">
                  View Cart
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link to="/contact" id="footer-links">
                  Help
                </Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Payments</Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">My Wishlist</Link>{" "}
              </div>
              <div className="mb-3">
                {" "}
                <Link id="footer-links">Coupons</Link>{" "}
              </div>
            </div>
          </div>
          <hr className="my-4" />
          <div className="row">
            <div className="flex-50">
              <p className="text-center text-md-start">
                &copy;Developed by Eclar Developers 2023
              </p>
            </div>
            <div className="flex-50 ">
              <ul className="flex gap-2">
                  <Link to="#" className="text-dark">
                    Privacy Policy
                  </Link>
                  <Link to="#" className="text-dark">
                    Terms of Use
                  </Link>
                  <Link to="#" className="text-dark">
                    Contact Us
                  </Link>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
