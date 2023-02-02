/* eslint-disable */

// import React from "react";
import React, { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../component";
import './Profile.scss'

import {
    retrieveGames,
    findGamesByName,
    // deleteAllGames,
} from "../../actions/games"

const Profile = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(retrieveGames());
    }, []);

    const games = useSelector(state => state.games);
    console.log(games)


    const [searchName, setSearchName] = useState("");


    const { user: currentUser } = useSelector((state) => state.auth);

    if (!currentUser) {
        return <Navigate to="/" />;
    }

    const onChangeSearchName = e => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };
    console.log(onChangeSearchName)


    const findByName = () => {
        dispatch(findGamesByName(searchName))
            .then(

        )
    };

    return (
        <div className="profile-container">

            <div className="header">
                {/* headerprop  handleChange={handleChange} */}
                <Header />
            </div>
            <div className='content'>
                {currentUser.roles == 'ROLE_ADMIN' ? <>

                    <div className="game-space">

                        <div className="add-game-header">
                            <h1>Games</h1>
                            <button>Add Game</button>
                        </div>

                        <table id="customers">
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Owner</th>
                                <th>Company</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                            {games &&
                                games.map((game, index) => (
                                    <tr>
                                        <td key={index}>
                                            {game.name}
                                        </td>
                                        <td>
                                            {game.short_description}
                                        </td>
                                        <td>
                                            {game.developer}
                                        </td>
                                        <td>
                                            {game.publisher}
                                        </td>
                                        <td>
                                            {game.price}
                                        </td>
                                        <td>
                                            <div>View</div>
                                            <div>Edit</div>
                                            <div>Delete</div>
                                        </td>

                                    </tr>
                                ))}
                        </table>
                    </div>

                </> : <>
                    <div><h1>Unauthenticated Users Profile</h1></div>
                </>}
            </div>

        </div>
    );
};

export default Profile;