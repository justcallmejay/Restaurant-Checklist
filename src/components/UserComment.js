import React, { useState } from "react"
import { AiOutlineMessage, AiFillEdit, AiOutlineCheck } from "react-icons/ai"

export default function UserComment( { myVisits, visit, renderComment, setRenderComment, handleVisit }) {

    const [userComment, setUserComment] = useState(null)
    const [commentButton, setCommentButton] = useState(false)

    function handleSubmitComment(id) {
        const submitComment = myVisits.map(place => {
            if (place.id === id) {
                visit.comment = renderComment
                fetch(`http://localhost:4000/user/${id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({
                        comment: renderComment
                    })
                })
                .then(res => res.json())
                .then(res => handleVisit(res))
            }
            if (visit.comment !== "") {
            setCommentButton((commentButton) => commentButton = true)
            return place;
        }
        })
        setUserComment(null)
    }

    const buttonDisplay = commentButton ? <AiFillEdit/> : <AiOutlineMessage/>
    
    return (
        <a className="comment-button">
        {visit.id === userComment ? (
            <>
            <div>
            <textarea className="textarea-submit" type="text" value={visit.renderComment} onChange={(e) => setRenderComment(e.target.value)}/>
            </div>
            <div>
            <button onClick={() => handleSubmitComment(visit.id)}><AiOutlineCheck/></button>
            </div>
            </>
        ) : (
        <button onClick={() => setUserComment(visit.id)}>{buttonDisplay}</button>)}
        </a>
    )
}