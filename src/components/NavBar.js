import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "80px",
    height: "40px",
    padding: "12px",
    margin: "0 6px 6px",
    left: "80%",
    position: "relative",
    textDecoration: "none",
    color: "white",
    fontSize: "16px"
}

const activeLink = {
    textDecoration: "underline",
    color: "black"
}

function NavBar() {

    return(
        <div className="navbar">
            <NavLink
            to="/"
            exact style={linkStyles}
            activeStyle={activeLink}
            >Home
            </NavLink>

            <NavLink
            to="/restaurants"
            exact style={linkStyles}
            activeStyle={activeLink}
            >Restaurants
            </NavLink>
            
            <NavLink
            to="/my-favorites"
            exact style={linkStyles}
            activeStyle={activeLink}
            >My Favorites
            </NavLink>
            
            <NavLink
            to="/add-restaurant"
            exact style={linkStyles}
            activeStyle={activeLink}
            >Add Restaurant
            </NavLink>
        </div>
    )
}

export default NavBar;