/* eslint-disable */
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { Header } from '../../component';
import { retrieveGames } from "../../actions/games"
import './GameDetails.scss'

function GameDetails() {

    let { id } = useParams();
    console.log(id)


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveGames());
    }, []);

    // const games = async () => {
    //     const getGames = await useSelector(state => state.games);
    //     return getGames
    // }

    const games = useSelector(state => state.games);
    console.log(games)
    let game;

    game = games ? games[parseInt(id) - 1] : games
    console.log(game)
    if (games.length !== 0) {
        console.log(games)
        game = games ? games[parseInt(id) - 1] : games
    }

    console.log(game)

    const gameDetailStyle = {
        backgroundImage: `url(${game.background_image})`,
        backgroundSize: 'cover',
        // postion: 'absolute',
        height: '100vh',
        width: '100vw',
        opacity: 0.8,
    }


    return (
        <div className="game-details" style={gameDetailStyle}>
            <div className="header-space" >
                <Header></Header>
            </div>
            <div className="content-space">
                {game ?
                    <>
                        <div className="game-text-card">
                            <h1> {game.name} </h1>
                            <br />
                            <div className="game-desc">
                                {game.short_description}
                            </div>
                            <br />
                            <div className="game-specs">
                                <div className="spec">
                                    <h3>Developed by</h3>
                                    {game.developer}
                                </div>
                                <div className="spec">
                                    <h3>Owned by</h3>
                                    {game.publisher}
                                </div>
                                <div className="spec">
                                    <h3>Launched on</h3>
                                    {game.released}
                                </div>
                                <div className="spec-special">
                                    <h3> <em>$ {game.price} </em></h3>
                                </div>

                            </div>
                        </div>


                    </>
                    :
                    <> <h1>No game found</h1></>
                }
            </div>
        </div>
    )

}

export default GameDetails