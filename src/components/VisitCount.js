import React, { useEffect, useState } from "react"
import { AiOutlinePlus } from "react-icons/ai"

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = (mm + '/' + dd + '/' + yyyy)

export default function VisitCount( { visit, setMyVisits } ) {

    const [visitDate, setVisitDate] = useState('')
    const [disable, setDisable] = useState(false)
    const [countDown, setCountDown] = useState('')

    useEffect(() => {
        fetch('http://localhost:4000/user')
        .then(res => res.json())
        .then(res => setMyVisits(res))
    }, [])

    function clickCount(id) {
        if (visit.id === id) {
        visit.visitCounter = ++visit.visitCounter
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
    
   
const disableBtn = (visiting) => {   
    setDisable(!disable);
    setVisitDate(today);
    visiting.timer = 10;
    visiting.lock = !disable;
    if (!disable) {
        let timer = setInterval(() => {
            fetch(`http://localhost:4000/user/${visiting.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    timer: --visiting.timer,
                    lock: visiting.lock
                })
            })
            setCountDown(`(Wait at least ${visiting.timer} seconds to click '+' button again)`)

            if(visiting.timer === 0) {
                setDisable(disable)
                setCountDown(null)
                visiting.lock = disable
                fetch(`http://localhost:4000/user/${visiting.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        lock: visiting.lock
                    })
                })
            clearInterval(timer)
            };
        }, 1000)
}}

    return(<div className="user-visit">
        <div><button className="visit-btn" disabled={disable ? true : false} onClick={() => {clickCount(visit.id);disableBtn(visit)}}><AiOutlinePlus size="10px"/></button>&nbsp;&nbsp;Visit(s): {visit.visitCounter}</div>
        <h5 className="timer">{countDown}</h5>
        <a>Last Visited: {visitDate}</a>
        <div></div>

    </div>
    )
}