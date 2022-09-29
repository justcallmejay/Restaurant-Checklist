import React from "react";
import UserRating from "./UserRating"
import UserComment from "./UserComment"

function MyFavorites( { myVisits } ) {


    // function handleUserRate(e) {
    //     setRenderRate(e.target.value)
    // }


    return (

        <div className="my-favs">
        <p>Here are the list of places that you have visited.</p>

        {myVisits.map(visit => 
            <div className="myFavorites" key={visit.id}>
                        <img src={visit.image} alt={visit.name}/>
                        <h2>{visit.name}</h2>
                        <h3>Type: {visit.description}</h3>
                        <h3>Rating avg: {visit.rating} / 5 of {visit.ratingcount} Customers</h3>
                        <h3>Price: {visit.price}</h3>
                        <div className="user-rating">
        <UserRating myVisits={myVisits} visit={visit}/>
        <UserComment myVisits={myVisits} visit={visit}/>
        </div>
        </div>
        )}
        </div>
    )
}

export default MyFavorites;