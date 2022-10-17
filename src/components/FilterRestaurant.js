import React from "react";

function FilterRestaurant( { filterPlace, filterPlacePrice } ){

    return (
    <>
    <a>Filter by: </a><select onChange={filterPlace}> Filter by: 
        <option value="All">All</option>
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
    </select>
    <a>Price: </a><select onChange={filterPlacePrice}>
        <option value="All">All</option>
        <option value="$$$">$$$</option>
        <option value="$$">$$</option>
        <option value="$">$</option>
    </select>
    </>
    )
}

export default FilterRestaurant;