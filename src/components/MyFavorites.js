import React, { useState } from "react";
import UserRating from "./UserRating";
import UserComment from "./UserComment";
import VisitCount from "./VIsitCount"

function MyFavorites( { myVisits, renderRate, setRenderRate } ) {

    const [renderComment, setRenderComment] = useState('')
    // function handleUserRate(e) {
    //     setRenderRate(e.target.value)
    // }


    return (
    <>
    <div className="restaurant-pagetitle">
        <h3>Here are the list of places that you have visited.</h3>
    </div>
        <div className="restaurant-container">
        {myVisits.map(visit => 
            <div className="myFavorites" key={visit.id}>
                        <img src={visit.image} alt={visit.name}/>
                        <h2>{visit.name}</h2>
                        <h3>Type: {visit.description}</h3>
                        <h3>Rating avg: {visit.rating.toFixed(2)} / 5 of {visit.ratingcount} Customers</h3>
                        <h3>Price: {visit.price}</h3>
                        <div className="user-rating">
                        <div>
        <a style={{ fontWeight : "bold" }}>Your comment: </a> {renderComment}
        </div>
        <UserRating myVisits={myVisits} visit={visit} renderRate={renderRate} setRenderRate={setRenderRate}/>
        <UserComment myVisits={myVisits} visit={visit} renderComment={renderComment} setRenderComment={setRenderComment}/>
        <VisitCount />
        </div>
        </div>
        )}
        </div>
    </>
    )
}

export default MyFavorites;