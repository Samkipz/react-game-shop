import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    retrieveGames,
    findGamesByName,
    deleteAllGames,
} from "../../actions/games"

const GameList = () => {
    const [currentGame, setCurrentGame] = useState(null);
    const [searchName, setSearchName] = useState("");

    useEffect(() => {
        dispatch(retrieveGames());
    }, []);

    const games = useSelector(state => state.games);
    const dispatch = useDispatch();
    // console.log(games)



    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const refreshData = () => {
        setCurrentGame(null);
    };

    const setActive = (game) => {
        setCurrentGame(game);
    };

    const removeAllGames = () => {
        dispatch(deleteAllGames())
            .then(response => {
                console.log(response);
                refreshData();
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByName = () => {
        refreshData();
        dispatch(findGamesByName(searchName))
    };

    return (
        <>
            <div className="col-md-8" style={{ marginTop: '2%' }}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by title"
                        value={searchName}
                        onChange={onChangeSearchName}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByName}
                        >
                            Search
                        </button>
                        <div className="col-md-6">
                            <h4>Tutorials List</h4>

                            <ul className="list-group">
                                {games &&
                                    games.map((game, index) => (
                                        <li

                                            onClick={() => setActive(game, index)}
                                            key={index}
                                        >
                                            {game.name}
                                        </li>
                                    ))}
                            </ul>

                            <button
                                className="m-3 btn btn-sm btn-danger"
                                onClick={removeAllGames}
                            >
                                Remove All
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameList;