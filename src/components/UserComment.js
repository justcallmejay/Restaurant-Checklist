import React, { useState } from "react"

export default function UserComment( { myVisits, visit, renderComment, setRenderComment }) {

    // console.log(visit)

    const [userComment, setUserComment] = useState(null)
    const [commentButton, setCommentButton] = useState(false)

    function handleSubmitComment(id) {
        console.log(id)
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
                .then(res => setRenderComment(res))
            }
            setCommentButton((commentButton) => commentButton = true)
            return place;
        })
        setUserComment(null)
    }

    const buttonDisplay = commentButton ? "Edit" : "Comment"
    
    return (
        <a className="comment-button">
        {visit.id === userComment ? (
            <>
            <div>
            <textarea className="textarea-submit" type="text" value={visit.renderComment} onChange={(e) => setRenderComment(e.target.value)}/>
            </div>
            <div>
            <button onClick={() => handleSubmitComment(visit.id)}>Submit Comment</button>
            </div>
            </>
        ) : (
        <button onClick={() => setUserComment(visit.id)}>{buttonDisplay}</button>)}
        {/* <div>
        <a style={{ fontWeight : "bold" }}>Your comment: </a> {renderComment}
        </div> */}
        </a>
    )
}