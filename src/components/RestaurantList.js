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

    const renderThanks = () => {
        setThanks('Thank you!')
    }

    if (addRestaurant.name === "" && addRestaurant.location === "" && addRestaurant.rating === "") {
        alert('Please fill in the boxes below')
    } else {
    handleNewRestaurant(addRestaurant)
    setAddRestaurant(initialStateForm)
    fetch('http://localhost:4000/restaurants', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(addRestaurant)
    })
    renderThanks();
    }
}


return (
    <div className="container">
    <form className="restaurant-list" onSubmit={handleSubmit}>
        <h3>Discovered a New Restaurant?  Tell us below!</h3>
        <p>After submission, we will search for the restaurant to ensure information provided are correct and up-to-date.  Thank you for helping us grow our site!</p>
        <div className="text-info">Restaurant Name:&nbsp;
        <input 
        className="input-box" 
        type="text" 
        name="name" 
        placeholder="Restaurant Name" 
        value={addRestaurant.name} 
        onChange={handleOnChange}/>
        </div>
        <div className="text-info">Location:&nbsp;
        <input 
        className="input-box" 
        type="text" 
        name="location" 
        placeholder="Restaurant Location" 
        value={addRestaurant.location} 
        onChange={handleOnChange}/>
        </div>
        <div className="text-info">Description:&nbsp;
        <textarea 
        className="input-box" 
        type="text" 
        name="description" 
        id="text-box" 
        placeholder="Describe the restaurant (optional)" 
        value={addRestaurant.description} 
        onChange={handleOnChange}/>
        <div className="text-info">Image:&nbsp;
        <input 
        className="input-box" 
        type="text" 
        name="image" 
        placeholder="Add image link (optional)" 
        value={addRestaurant.image} 
        onChange={handleOnChange}/>
        </div>
        <div>Your rating:&nbsp;
            <select name="rating" value={addRestaurant.rating} onChange={handleOnChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select></div>
        <div><button>Submit</button></div>
        <div><h4>{thanks}</h4></div>
        </div>
    </form>
    </div>
    )
}

export default RestaurantList;