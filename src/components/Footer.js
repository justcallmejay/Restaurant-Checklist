import React from "react";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                            <li key="location">Location:</li>
                            <li key="street-address">555 Some Street, Somewerville</li>
                            <li key="city">Someplace, United States</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">
                            <li key="contact">Contact Us:</li>
                            <li key="phone">Phone number: 555-555-5555</li>
                            <li key="email">Email: someemail@somemail.com</li>
                            <a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Jay's Project | All right reserved | Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>       
    )
}

export default Footer;