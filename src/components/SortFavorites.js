import React, { useState, useEffect } from "react";

export default function SortFavorites( { myVisits, setMyVisits, sortFavorites, setSortFavorites } ) {

    useEffect(() => {
        if (sortFavorites === "visits") {
            setMyVisits(sortByVisitCount)
        } else if (sortFavorites === "ratings") {
            setMyVisits(sortByRatings)
        }
    })

    function sortByVisitCount() {
        console.log('clicked')
        return [...myVisits].sort(function(a,b) {
            return a.visitCounter - b.visitCounter
        })
    }

    function sortByRatings() {
        return [...myVisits].sort(function(a,b) {
            return a.userrating - b.userrating
        })
    }

        return (
        <>
        <a>Sort By:</a><select onChange={(e) => setSortFavorites(e.target.value)}>
            <option value=""></option>
            <option value="visits">Visit Count</option>
            <option value="ratings">Ratings</option>
        </select>
        </>
    )
}