import React, { useEffect, useState } from "react";
import UserRating from "./UserRating";
import UserComment from "./UserComment";
import VisitCount from "./VisitCount";
import DeleteCard from "./DeleteCard";
import SortVisits from "./SortVisits"

function MyVisits ( { myVisits, setMyVisits, restaurant, setRestaurant } ) {

    const [renderComment, setRenderComment] = useState('')
    const [ratePlace, setRatePlace] = useState(null)
    const [sortFavorites, setSortFavorites] = useState('')

    
    useEffect(() => {
        fetch('http://localhost:4000/restaurants')
        .then(res => res.json())
        .then(res => setRestaurant(res))
    }, [ratePlace, myVisits])
    
    function renderVisits() {
        if (myVisits.length !== 0) {
            return (
                <>
            <h3>Here are the list of places that you have visited.</h3>
            <SortVisits 
                myVisits={myVisits} 
                setMyVisits={setMyVisits} 
                sortFavorites={sortFavorites} 
                setSortFavorites={setSortFavorites}
            />
            </>)
        } else {
            return (<h3>Start your profile by checking the Restaurants page!</h3>)
        }
    }
    
    function handleVisit(place) {
        const edit = myVisits.map(visit => {
            if (visit.id === place.id) {
                return place
            } else {
                return visit
            }
        })
        setMyVisits(edit)
    }
    
    function deleteRestaurant(removelist) {
        const deleteRestaurantCard = myVisits.filter((place) => 
        place.id !== removelist.id);
        return setMyVisits(deleteRestaurantCard);
    }

    return (
    <>
    <div className="restaurant-pagetitle">
    <h1>My Restaurant Trips</h1>
        {renderVisits()}
    </div>
        <div className="restaurant-container">
        {myVisits.map(visit => 
            <div className="myFavorites" key={visit.id}>
                        <img src={visit.image} alt={visit.name}/>
                        <h2>{visit.name}</h2>
                        <h3>Type: {visit.description}</h3>
                        <h3>Rating avg:</h3>
                        <h4>&nbsp;&nbsp;&nbsp;&nbsp;{visit.rating.toFixed(2)} / 5 from  {visit.ratingcount} Customers</h4>
                        <h3 className="price-favorites">Price: {visit.price}</h3>
                        <div className="user-rating">
                        <div>
                    <div style={{ fontWeight : "bold" }} className="div-interaction">
                        Your rating: {visit.userrating}</div>
                    <a style={{ fontWeight : "bold" }} className="a-interaction">
                        Your comment: </a>
                        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{visit.comment}</div>
                        <br></br>
            </div>

        <UserRating 
            visit={visit}
            myVisits={myVisits}  
            ratePlace={ratePlace} 
            setRatePlace={setRatePlace}
            handleVisit={handleVisit}
            />
        <UserComment 
            myVisits={myVisits} 
            visit={visit} 
            renderComment={renderComment} 
            setRenderComment={setRenderComment} 
            handleVisit={handleVisit}
            />
        <VisitCount 
            visit={visit} 
            setMyVisits={setMyVisits}
            />
        <DeleteCard 
            myVisits={myVisits} 
            visit={visit} 
            restaurant={restaurant} 
            setRestaurant={setRestaurant}
            deleteRestaurant={deleteRestaurant}
            />
            </div>
        </div>
        )}
    </div>
    </>
    )
}

export default MyVisits;

// useEffect(() => {
//     fetch('http://localhost:4000/user')
//     .then(res => res.json())
//     .then(myVisits => setMyVisits(myVisits))
// }, [renderComment])

// function handleRating(place) {
//     const editRating = myVisits.map(visit => {
//         if (visit.id === place.id) {
//             return place
//         } else {
//             return visit
//         }
//     })
//     setMyVisits(editRating)
// }