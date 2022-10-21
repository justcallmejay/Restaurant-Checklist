import React, { useEffect, useState } from "react"

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = (mm + '/' + dd + '/' + yyyy)

export default function VisitCount( { visit, setMyVisits } ) {

    const [visitDate, setVisitDate] = useState('')
    const [disable, setDisable] = useState(false)
    const [countDown, setCountDown] = useState('')
    // const [visitCount, setVisitCount] = useState(visit.visitCounter)

    useEffect(() => {
        fetch('http://localhost:4000/user')
        .then(res => res.json())
        .then(res => setMyVisits(res))
    }, [])

    // console.log(visitCount)

    function clickCount(id) {
        console.log(id)
        if (visit.id === id) {
            console.log(id)
        visit.visitCounter = ++visit.visitCounter
        // setVisitCount(count => count + 1)
        fetch(`http://localhost:4000/user/${visit.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                visitCounter: (visit.visitCounter)
            })
        })
    }
}
    
   
    const disableBtn = () => {   
        setDisable(!disable)
        setVisitDate(today)
        if (!disable) {
            setInterval(() => {setDisable(disable)}, 1440000)
            setCountDown("(Wait 3 at least hours to click '+' button again)")
}}

    // const disableButton = 

    // console.log(visitDate)

    return(<div className="user-visit">
        <div><button disabled={disable ? true : false} onClick={() => {clickCount(visit.id);disableBtn()}}>+</button>Visit(s): {visit.visitCounter} {countDown}</div>
        <a>Last Visited: {visitDate}</a>
        <div></div>

    </div>
    )
}