import React from "react";

function MyFavorites( { myVisits } ) {

    console.log(myVisits)
    return (
        <div className="my-favs">
        <p>Here are the list of places that you have visited.</p>

        {myVisits.map(visit => 
            <div className="myFavorites" key={visit.id}>
                        <img src={visit.image} alt={visit.name}/>
                        <h2>{visit.name}</h2>
                        <h3>{visit.description}</h3>
                        <h3>Rating avg: {visit.rating} / 5 of {visit.ratingcount} Customers</h3>
                        <h3>Price: {visit.price}</h3>
                        <div className="user-rating">
            <button>Rate</button><button>Comment</button>
        </div>
        </div>
        )}
        </div>
    )
}

export default MyFavorites;