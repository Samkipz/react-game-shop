import React from 'react'
import './SingleGame.scss'
import { useNavigate } from 'react-router-dom'

function SingleGame(props) {
    const navigate = useNavigate()
    return (
        <div onClick={() => { navigate("/game-details/" + props.id) }} className="Item" style={{ backgroundImage: 'url(' + props.backdrop + ')' }} >
            <div className="overlay">
                <div className="title">{props.title}</div>
                <div className="rating">{props.score} / 10</div>
                <div className="plot">{props.overview}</div>
            </div>
        </div>
    )
}

export default SingleGame