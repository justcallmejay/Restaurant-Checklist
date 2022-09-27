import React, { useState } from "react";

const initialStateForm = {
    name: '',
    location: '',
    image: '',
    description: '',
    price: '',
    rating: ''
}

function RestaurantList( { handleNewRestaurant } ) {

const [addRestaurant, setAddRestaurant] = useState(initialStateForm)

function handleOnChange(e) {
    const [ name, value ] = e.target

setAddRestaurant(restaurant => {
    return {
        ...restaurant,
        [name]: value
        }
    })
}

function handleSubmit(e) {
    e.preventDefault();
    handleNewRestaurant(addRestaurant)
    setAddRestaurant(initialStateForm)
    fetch('http://localhost:4000/restaurants', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(addRestaurant)
    })
}

return (
    <form className="restaurant-list" onSubmit={handleSubmit}>
        <h3>Discovered a New Restaurant?  Tell us below!</h3>
        <p>After submission, we will take a look at the restaurant (to make sure it is legit)</p>
        <div><span className="add-text">Restaurant Name:</span>
        <input className="input-box" type="text" name="food" placeholder="Restaurant Name" onChange={handleOnChange}/>
        </div>
        <div><span className="add-text">Location: </span>
        <input className="input-box" type="text" name="food" placeholder="Restaurant Name" onChange={handleOnChange}/>
        </div>
        <div><span className="add-text">Description: </span>
        <textarea className="input-box" type="text" name="food" id="text-box" onChange={handleOnChange}/>
        <div><button>Submit</button></div>
        </div>
    </form>
    )
}

export default RestaurantList;