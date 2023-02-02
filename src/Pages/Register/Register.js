import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import './Register.scss'
import { FaExclamationTriangle } from 'react-icons/fa';

import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth"

const required = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const validEmail = (value) => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const vusername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                The username must be between 3 and 20 characters.
            </div>
        );
    }
};

const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                The password must be between 6 and 40 characters.
            </div>
        );
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector(state => state.message);
    const dispatch = useDispatch();

    const onChangeUsername = (e) => {
        const username = e.target.value;
        setUsername(username);
    };

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleRegister = (e) => {
        e.preventDefault();

        setSuccessful(false);

        // form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            dispatch(register(username, email, password))
                .then(() => {
                    setSuccessful(true);
                })
                .then(setTimeout(function () {
                    window.location.reload();
                }, 3000))
                .catch(() => {
                    setSuccessful(false);
                });
        }
    };

    function handleModal() {
        document.getElementById('id02').style.display = 'block'
    }

    function closeModal() {
        document.getElementById('id02').style.display = 'none'
    }


    return (
        <div>
            {/* onclick="document.getElementById('id01').style.display='block'"  */}
            <button onClick={handleModal} className="login-btn">Register</button>

            <div id="id02" className="modal">
                <Form className="modal-content animate" onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="imgcontainer">
                                <span onClick={closeModal} className="close" title="Close Modal">&times;</span>
                            </div>


                            <div className="container">

                                <label htmlFor="username"><b>Username</b></label>

                                <input type="text" placeholder="Enter Username" name="username"
                                    value={username}
                                    onChange={onChangeUsername} validations={[required, vusername]} required />

                                <label htmlFor="email"><b>Email</b></label>

                                <input type="text" placeholder="Enter Email" name="email"
                                    value={email}
                                    onChange={onChangeEmail} validations={[required, validEmail]} required />

                                <label htmlFor="password"><b>Password</b></label>
                                <input type="password" placeholder="Enter Password" name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]} required />

                                <button type="submit">Register</button>
                            </div>

                        </div>
                    )}

                    {message && (
                        <div className="form-alert">
                            <div className={successful ? "alert-success" : "alert-danger"} role="alert">
                                {successful ? " " : <FaExclamationTriangle />}
                                {message}
                            </div>
                        </div>
                    )}

                    {/* setTimeout(function(){
                        window.location.reload();
                    }, 5000) */}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
};

export default Register;