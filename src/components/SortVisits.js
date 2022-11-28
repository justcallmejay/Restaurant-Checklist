import React, { useEffect, useState } from "react";

export default function SortVisits ( { myVisits, setMyVisits } ) {

    const [sortFavorites, setSortFavorites] = useState('')

    useEffect(() => {
        if (sortFavorites === "visits") {
            setMyVisits(sortByVisitCount)
        } else if (sortFavorites === "ratings") {
            setMyVisits(sortByRatings)
        }
    }, [sortFavorites])

    function sortByVisitCount() {
        return [...myVisits].sort(function(a,b) {
            return b.visitCounter - a.visitCounter
        })
    }

    function sortByRatings() {
        return [...myVisits].sort(function(a,b) {
            return b.userrating - a.userrating
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