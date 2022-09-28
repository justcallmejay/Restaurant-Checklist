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
const [thanks, setThanks] = useState('')

const handleOnChange = (e) => {
    const { name, value } = e.target;

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

function renderThanks() {
    setThanks('Thank you!')
}

return (
    <form className="restaurant-list" onSubmit={handleSubmit}>
        <h3>Discovered a New Restaurant?  Tell us below!</h3>
        <p>After submission, we will search for the restaurant to ensure information provided are correct and up-to-date.  Thank you for helping us grow our site!</p>
        <div><span className="add-text">Restaurant Name: </span>
        <input className="input-box" type="text" name="name" placeholder="Restaurant Name" value={addRestaurant.name} onChange={handleOnChange}/>
        </div>
        <div><span className="add-text">Location: </span>
        <input className="input-box" type="text" name="location" placeholder="Restaurant Location" value={addRestaurant.location} onChange={handleOnChange}/>
        </div>
        <div><span className="add-text">Description: </span>
        <textarea className="input-box" type="text" name="description" id="text-box" value={addRestaurant.description} onChange={handleOnChange}/>
        <div><span>
            Your rating: </span>
            <select name="rating" value={addRestaurant.rating} onChange={handleOnChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select></div>
        <div><button onClick={renderThanks}>Submit</button></div>
        <div>{thanks}</div>
        </div>
    </form>
    )
}

export default RestaurantList;