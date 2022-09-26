import React from "react";
import { NavLink } from "react-router-dom"

const linkStyles = {
    display: "inline-block",
    width: "100%",
    height: "40px",
    background: "none",
    padding: "12px",
    margin: "0 6px 6px"
}

function NavBar() {

    return(
        <div className="navbar">
            <NavLink
            to="/"
            exact style={linkStyles}
            activeStyle={{ background : "darkblue" }}
            >Home
            </NavLink>

            <NavLink
            to="/restaurants"
            exact style={linkStyles}
            activeStyle={{ background : "darkblue" }}
            >Restaurants
            </NavLink>
            
            <NavLink
            to="/my-favorites"
            exact style={linkStyles}
            activeStyle={{ background : "darkblue" }}
            >My Favorites
            </NavLink>
            
            <NavLink
            to="/add-restaurant"
            exact style={linkStyles}
            activeStyle={{ background : "darkblue" }}
            >Add Restaurant
            </NavLink>
        </div>
    )
}

export default NavBar;