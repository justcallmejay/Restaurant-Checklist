import React, { useEffect, useState } from "react";
import UserRating from "./UserRating";
import UserComment from "./UserComment";
import VisitCount from "./VisitCount";
import DeleteCard from "./DeleteCard"

function MyFavorites( { myVisits, setMyVisits, restaurant } ) {

    const [renderComment, setRenderComment] = useState('')
    const [ratePlace, setRatePlace] = useState(null)

    console.log(myVisits)

    useEffect(() => {
        fetch('http://localhost:4000/user')
        .then(res => res.json())
        .then(myVisits => setMyVisits(myVisits))
    }, [renderComment, ratePlace, setMyVisits])

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
                        <h3>Rating avg: {visit.rating.toFixed(2)} / 5 from  {visit.ratingcount} Customers</h3>
                        <h3>Price: {visit.price}</h3>
                        <div className="user-rating">
                        <div>
                    <div style={{ fontWeight : "bold" }}>
                        Your rating: {visit.userrating}</div>
                    <a style={{ fontWeight : "bold" }}>
                        Your comment: </a>{visit.comment}
            </div>

        <UserRating 
            myVisits={myVisits} visit={visit} 
            ratePlace={ratePlace} setRatePlace={setRatePlace}/>
        <UserComment 
            myVisits={myVisits} visit={visit} 
            renderComment={renderComment} setRenderComment={setRenderComment}/>
        <VisitCount visit={visit}/>
        <DeleteCard 
            myVisits={myVisits} setMyVisits={setMyVisits} visit={visit} restaurant={restaurant} />
        </div>
        </div>
        )}
        </div>
    </>
    )
}

export default MyFavorites;