import React, { useState } from "react";

export default function UserRating( { myVisits, visit, ratePlace, setRatePlace } ) {

    const [renderRate, setRenderRate] = useState("")

    function handleClick(id) {
        console.log('clicked')
        const updateRestaurantRating = [...myVisits].map(place => {
            if (place.id === id) {
                if (renderRate === "") {
                    alert('please choose a number')
                } else {
                if (place.userrating === "") {
                const newRenderRate = [...place.ratingData, parseInt(renderRate)];
                const sumArray = newRenderRate.reduce((accumulator, value) => {
                    return accumulator + value
                }, 0);
                const customerCount = (parseInt(place.ratingcount) + 1)
                const newRating = (sumArray / customerCount)
            fetch(`http://localhost:4000/restaurants/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    rating: newRating,
                    ratingData: newRenderRate,
                    ratingcount: customerCount
                })
            })
            fetch(`http://localhost:4000/user/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    userrating: parseInt(renderRate),
                    rating: newRating,
                    ratingData: newRenderRate,
                    ratingcount: customerCount
                })
            })
        }
        else if (place.userrating !== "") {
            alert('you already rated this restaurant')
        }}
    }
        return place;
    })
    setRenderRate('')
    setRatePlace(null)
    }

    return (
        <a className="rating-button">
        {visit.id === ratePlace ? (
            <>
            <select onChange={(e) => setRenderRate(e.target.value)}>
                <option value="">   </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <button onClick={() => handleClick(visit.id)}>Submit Rate</button>
            </>
        ) : (
        <button onClick={() => setRatePlace(visit.id)}>Rate</button>
        )}
        </a>
    )
}