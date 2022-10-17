import React, { useState, useEffect } from "react";

export default function SortRestaurant( { restaurant, setRestaurant, searchBar, searchRestaurant } ) {

    const [sortBy, setSortBy] = useState('')

    useEffect(() => {
        if (sortBy === 'A-Z') {
            const sortedNameA = sortByNameA()
            setRestaurant(sortedNameA)
        } else if (sortBy === 'Z-A') {
            const sortedNameZ = sortByNameZ()
            setRestaurant(sortedNameZ)
        } else if (sortBy === 'lowest') {
            const sortedLowest = sortByLowest()
            setRestaurant(sortedLowest)
        } else if (sortBy === 'highest') {
            const sortedHighest = sortByHighest()
            setRestaurant(sortedHighest)
        } else if (sortBy === 'nearest') {
            setRestaurant(sortByNearest())
        } else if (sortBy === 'farthest') {
            setRestaurant(sortByFarthest())
        } else if (sortBy === 'low-rate') {
            setRestaurant(sortByLowRate()) 
        } else if (sortBy === 'high-rate') {
            setRestaurant(sortByHighRate())
        }
    }, [sortBy])

    function sortRestaurantBy(e) {
        setSortBy(e.target.value)
    }

    function sortByNameA() {
        return [...restaurant].sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    }

    function sortByNameZ() {
        return [...restaurant].sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        })
    }

    function sortByLowest() {
        return [...restaurant].sort(function(a, b) {
            let nameA = a.price.toUpperCase();
            let nameB = b.price.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })
    }

    function sortByHighest() {
        return [...restaurant].sort(function(a, b) {
            let nameA = a.price.toUpperCase();
            let nameB = b.price.toUpperCase();
            if (nameA > nameB) {
                return -1;
            }
            if (nameA < nameB) {
                return 1;
            }
            return 0;
        })
    }

    function sortByNearest() {
        return [...restaurant].sort(function(a, b) {
            return a.location - b.location
        })
    }

    function sortByFarthest() {
        return [...restaurant].sort(function(a, b) {
            return b.location - a.location
        })
    }

    function sortByLowRate() {
        return [...restaurant].sort(function(a, b){
            return a.rating - b.rating
        }) 
    }

    function sortByHighRate() {
        return [...restaurant].sort(function(a, b){
            return b.rating - a.rating
        }) 
    }

    return (
        <>
        <a>Sort By:</a><select onChange={sortRestaurantBy}>
        <option value=""> </option>
        <option value="A-Z">A - Z</option>
        <option value="Z-A">Z - A</option>
        <option value="nearest">Nearest</option>
        <option value="farthest">Farthest</option>
        <option value="lowest">Price - Lowest</option>
        <option value="highest">Price - Highest</option>
        <option value="low-rate">Ratings - Lowest</option>
        <option value="high-rate">Ratings - Highest</option>
    </select>
    <input type="text" placeholder="Search Restaurant" value={searchBar} onChange={searchRestaurant}></input>
    </>
    )
}