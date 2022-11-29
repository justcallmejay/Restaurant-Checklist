import React, { useState } from "react";
import { addRestImg } from "../image.js"

function NewRestaurant( { restaurant, handleNewRestaurant, handleMyVisit, addRestaurant, setAddRestaurant, initialStateForm } ) {
    

const [thanks, setThanks] = useState('')
const [checkBox, setCheckBox] = useState(false)

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
        setThanks('Thank you for your submission!')
    }

    if (
       addRestaurant.name === "" 
    || addRestaurant.location === "" 
    || addRestaurant.description === ""
    || addRestaurant.price === ""
    ) {
        alert('Please fill in the boxes below.')
    } else if (isNaN(addRestaurant.location)) {
        alert('The Distance is not a number.') 

    } else if (addRestaurant.rating === "") {

        if (checkBox === true) {
            fetch('http://localhost:4000/user', {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    ...addRestaurant,
                    location: parseFloat(addRestaurant.location),
                    rating: 0,
                    ratingData: [],
                    ratingcount: 0,
                    comment: "",
                    userrating: "",
                    visitCounter: 0,
                    id: restaurant.length + 1
                    })
                })
                .then(res => res.json())
                .then(res => handleMyVisit(res))
                renderThanks();
            }

        fetch('http://localhost:4000/restaurants', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                ...addRestaurant,
                location: parseFloat(addRestaurant.location),
                rating: 0,
                ratingData: [],
                ratingcount: 0,
                comment: ""
            })
        })
        .then(res => res.json())
        .then(res => handleNewRestaurant(res))
        renderThanks();
        
    } else {
    handleNewRestaurant(addRestaurant)
    setAddRestaurant(initialStateForm)
    fetch('http://localhost:4000/restaurants', {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            ...addRestaurant,
            location: parseFloat(addRestaurant.location),
            rating: parseInt(addRestaurant.rating),
            ratingData: [parseInt(addRestaurant.rating)],
            ratingcount: 1,
            comment: ""
        })
    })
    .then(res => res.json())
    .then(res => handleNewRestaurant(res))
    renderThanks()

    if (checkBox === true)  {
        fetch('http://localhost:4000/user', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                ...addRestaurant,
                location: parseFloat(addRestaurant.location),
                rating: parseInt(addRestaurant.rating),
                ratingData: [parseInt(addRestaurant.rating)],
                ratingcount: 1,
                comment: "",
                userrating: parseInt(addRestaurant.rating),
                visitCounter: parseInt(1),
                id: restaurant.length + 1
                })
            })
            .then(res => res.json())
            .then(res => handleMyVisit(res))
            renderThanks();
        }
    }
    setCheckBox(checkBox => !checkBox);
}

return (
    <>
    <form className="restaurant-list" onSubmit={handleSubmit}>
    <img src={addRestImg}/>
        <h2>Discovered a New Restaurant?</h2>
        <p>Expand your delicacy discoveries by submitting a new restaurant</p>
        <div className="new-restaurant-container">
        <div className="text-info">Restaurant Name:&nbsp;
        <input 
            className="input-box" 
            type="text" 
            name="name" 
            placeholder="Restaurant Name" 
            value={addRestaurant.name} 
            onChange={handleOnChange}
        />
        </div>
        <div className="text-info">Distance (in miles):&nbsp;
        <input 
            className="input-box" 
            type="text" 
            name="location" 
            placeholder="Restaurant Location" 
            value={addRestaurant.location} 
            onChange={handleOnChange}
        />
        </div>
        <div className="text-info">Image:&nbsp;
        <input 
            className="input-box" 
            type="text" 
            name="image" 
            placeholder="Add image link (optional)" 
            value={addRestaurant.image} 
            onChange={handleOnChange}
        />
                </div>
        <div className="text-info-box">Type:&nbsp;
        <select className="dropdown"
        name="description"
        value={addRestaurant.description} 
        onChange={handleOnChange}>
            <option value=""></option>
            <option value="beef">Beef</option>
            <option value="burger">Burger</option>
            <option value="chicken">Chicken</option>
            <option value="dessert">Dessert</option>
            <option value="diner">Diner</option>
            <option value="fish">Fish</option>
            <option value="gyro">Gyro</option>
            <option value="pizza">Pizza</option>
            <option value="sushi">Sushi</option>
            <option value="taco">Taco</option>
            <option value="vegan">Vegan</option>
            <option value="veggie">Veggie</option>
        </select></div>
        <div className="text-info-box">Price:&nbsp;
            <select 
                name="price" 
                className="dropdown" 
                value={addRestaurant.price} 
                onChange={handleOnChange}>
            <option value=""></option>
            <option value="$">$</option>
            <option value="$$">$$</option>
            <option value="$$$">$$$</option>
            </select></div>
        <div className="text-info-box">(Optional) Rating:&nbsp;
            <select 
                name="rating" 
                className="dropdown" 
                value={addRestaurant.rating} 
                onChange={handleOnChange}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select></div>
            <input type="checkbox" onChange={() => setCheckBox(!checkBox)}/>Add to My Page
        <div><button id="submit-button">Submit</button></div>
        <div><h4>{thanks}</h4></div>
        </div>
    </form>
    </>
    )
}

export default NewRestaurant;