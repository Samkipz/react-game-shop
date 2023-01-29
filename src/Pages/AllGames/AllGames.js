import React, { useState } from 'react'
import { Header } from '../../component'
import './AllGames.scss'
import games from '../../fakeData/games'
import { Link } from 'react-router-dom'
import { FaCartPlus, FaStar } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { FiStar } from 'react-icons/fi';
import GameDetails from '../GameDetails/GameDetails'
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function AllGames() {

    function rateGame(rating) {
        let ratings = []
        for (let i = 0; i < 5; i++) {
            if (i < Math.trunc(rating)) {
                ratings.push(<AiFillStar color='red' />)
            }
            else {
                ratings.push(<FaStar />)
            }
        }
        return ratings
    }

    const [filteredGames, setfilteredGames] = useState(games)

    function handleChange(e) {
        console.log(e.target.value)
        games.map((game) => {
            if ((game.name.replace(/[^A-Z0-9]/ig, "_")).toLowerCase().includes(e.target.value.toLowerCase())) {
                setfilteredGames([game])
            }
            console.log(filteredGames)
        })
        return filteredGames
    }

    return (
        <div className='allgames-wrapper'>
            <div className="header">
                <Header handleChange={handleChange} />
            </div>

            <div className='allgames'>



                {filteredGames.map((game, index) =>
                    <div className='gamecard' >

                        <Link to={'/game-details/' + game.id} className="link-block">


                            <div className="webinar-image-container">
                                <img src={game.background_image} alt='' />
                            </div>


                            <div className="webinar-content-box">

                                <p>{game.name}</p>
                                <p style={{ color: 'red', fontWeight: '700', fontSize: '1.2em' }}> ${game.price}.0</p>
                                <p>{rateGame(game.rating)}</p>
                                <span className="dundas-blue-link"> <FaCartPlus /> Add to Cart</span>
                            </div>
                        </Link>
                    </div>
                )}

            </div>

        </div>
    )
}

export default AllGames