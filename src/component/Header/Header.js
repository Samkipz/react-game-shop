import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import './Header.scss'
import Navbar from '../Navbar/Navbar'
import Search from '../Search/Search'
import Login from '../../Pages/Login/Login'
import Register from '../../Pages/Register/Register'

// import { logout } from "./actions/auth";
import { logout } from '../../actions/auth'
import { clearMessage } from "../../actions/message";
// import { clearMessage } from "../../actions/message";

// import AuthVerify from "./common/AuthVerify";
// import EventBus from "./common/EventBus";
import eventBus from "../../common/EventBus";


function Header(props) {

    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);

    const { user: currentUser } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    let location = useLocation();

    useEffect(() => {
        if (["/login", "/register"].includes(location.pathname)) {
            dispatch(clearMessage()); // clear message when changing location
        }
    }, [dispatch, location]);

    const logOut = useCallback(() => {
        dispatch(logout());
    }, [dispatch]);

    useEffect(() => {
        if (currentUser) {
            setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
            setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
        } else {
            setShowModeratorBoard(false);
            setShowAdminBoard(false);
        }

        eventBus.on("logout", () => {
            logOut();
        });

        return () => {
            eventBus.remove("logout");
        };
    }, [currentUser, logOut]);


    return (
        <div className='head-wrapper'>
            <div className='head-logo'>LOGO</div>
            <div className='head-navbar'>
                <Navbar />
            </div>
            <div className='head-searchbar'>
                <Search handleChange={props.handleChange} />
            </div>

            <div className='head-profile'>
                {currentUser ?
                    <>
                        <div className="profile-link">
                            <Link to={"/profile"}>
                                {currentUser.roles == 'ROLE_ADMIN' ?
                                    <div style={{
                                        border: '1px solid red',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.2vmin',
                                        padding: '1vmin'
                                    }}>
                                        <div style={{
                                            backgroundColor: 'red',
                                            padding: '0.1vmin'
                                        }}>ADMIN</div><div>{currentUser.username}</div>
                                    </div> : currentUser.username
                                }

                            </Link>
                        </div>
                        <div className="profile-link">
                            <a onClick={logOut}>
                                LogOut
                            </a>
                        </div>
                    </> :
                    <>
                        <Register />
                        <Login />
                    </>
                }
            </div>

            {/* 
            {currentUser ? (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/profile"} className="nav-link">
                            {currentUser.username}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="/login" className="nav-link" onClick={logOut}>
                            LogOut
                        </a>
                    </li>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                            Login
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                            Sign Up
                        </Link>
                    </li>
                </div>
            )} */}
        </div>
    )
}

export default Header