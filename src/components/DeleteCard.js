import React from "react";

function DeleteCard( { visit, myVisits, setMyVisits, restaurant } ) {

    function deleteRestaurant(removelist) {
        console.log(removelist)
        const deleteRestaurantCard = myVisits.filter((place) => 
        place.id !== removelist.id);
                return setMyVisits(deleteRestaurantCard);
            }



    function handleDeleteCard() {
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
        <button onClick={handleDeleteCard}>Delete</button>
        </>
    )
}

export default DeleteCard;