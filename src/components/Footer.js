import React from "react";

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ul className="list-unstyled">
                            <li>Location:</li>
                            <li>Someplace, United States</li>
                            <li>555 Some Street, Somewerville</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="list-unstyled">
                            <li>Contact Us:</li>
                            <li>Phone number: 555-555-5555</li>
                            <li>Email: someemail@somemail.com</li>
                            <a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com"><i class="fab fa-twitter"></i></a>
                            <a href="https://instagram.com"><i class="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com"><i class="fab fa-linkedin-in"></i></a>
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