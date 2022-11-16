import React, { useEffect } from "react";
import { AiOutlineDelete } from "react-icons/ai"

function DeleteCard( { visit, myVisits, setMyVisits, restaurant, setRestaurant } ) {

    //Make a useEffect here with myVisits as a dependency so that the Restaurant page re-renders from this component rather than the Restaurant page and the entire child components

    useEffect(() => {
        fetch('http://localhost:4000/restaurants')
        .then(res => res.json())
        .then(res => setRestaurant(res))
    }, [myVisits])

    function deleteRestaurant(removelist) {
        // console.log(removelist)
        const deleteRestaurantCard = myVisits.filter((place) => 
        place.id !== removelist.id);
                return setMyVisits(deleteRestaurantCard);
            }

    function handleDeleteCard(visit) {
    fetch(`http://localhost:4000/user/${visit.id}`, {
        method: "DELETE",
    })
    .then(res => res.json())
    .then(() => deleteRestaurant(visit));
    restaurant.map(place => {
    if (place.id === visit.id && visit.userrating !== '') {
        // console.log(place.ratingData)
        // console.log(visit.userrating)
        place.ratingData.splice(-1, 1);
        const lessRatings = place.ratingcount - 1;
        const revisedAvg = place.ratingData.reduce((accumulator, value) => {
            return accumulator + value
        });
        const newAvg = (revisedAvg/lessRatings);
        fetch(`http://localhost:4000/restaurants/${place.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                ratingData: place.ratingData,
                ratingcount: lessRatings,
                rating: newAvg
            })
        })
        .then(res => res.json())
        .then(() => deleteRestaurant(visit))
    }
})}

    return (
        <>
        <button onClick={() => handleDeleteCard(visit)}><AiOutlineDelete/></button>
        </>
    )
}

export default DeleteCard;