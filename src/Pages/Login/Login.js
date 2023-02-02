import React, { useState, useRef } from "react"; //--------------
import { useDispatch, useSelector } from "react-redux"; //-------------
import { Navigate, useNavigate } from 'react-router-dom'; //----------
import './Login.scss'
import { FaExclamationTriangle } from 'react-icons/fa';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import { login } from "../../actions/auth";


const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const Login = (props) => {
    let navigate = useNavigate();

    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        alert("Login Successful")
        e.preventDefault();

        setLoading(true);

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(login(username, password))
                .then(() => {
                    // navigate("/profile");
                    navigate("/");
                    // window.location.reload();
                })
                .catch(() => {
                    setLoading(false);
                });
        } else {
            setLoading(false);
        }
    };

    // if (isLoggedIn) {
    //     return <Navigate to="/" />;
    // }

    function handleModal() {
        document.getElementById('id01').style.display = 'block'
    }

    function closeModal() {
        document.getElementById('id01').style.display = 'none'
    }

    return (
        <div>
            <button onClick={handleModal} className="login-btn">Login</button>

            <div id="id01" className="modal">

                <Form className="modal-content animate" onSubmit={handleLogin} ref={form}>
                    <div className="imgcontainer">
                        <span onClick={closeModal} className="close" title="Close Modal">&times;</span>
                    </div>


                    <div className="container">

                        <label htmlFor="username"><b>Username</b></label>

                        <input type="text" placeholder="Enter Username" name="username"
                            value={username}
                            onChange={onChangeUsername} />

                        <label htmlFor="password"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password"
                            value={password}
                            onChange={onChangePassword} />

                        <button type="submit">Login</button>

                        {/* <label>
                <input type="checkbox" checked="checked" name="remember" /> Remember me
            </label> */}


                        {/* <div className="container div-container">

                <button type="button" onClick={closeModal} class="cancelbtn">Cancel</button>

                <span className="psw">Forgot <a href="#">password?</a></span>
            </div> */}
                    </div>

                    {message && (
                        <div className="form-alert">
                            <div className="alert-danger" role="alert">
                                <FaExclamationTriangle /> {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />

                </Form>
            </div>
        </div>
    );
};

export default Login;