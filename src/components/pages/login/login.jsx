import React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa';

import { useState } from "react";

import "./login.css";


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();

        /* alert("dados enviados:" + username + " - " + password) */
    };

    return (
        <div className="geral">
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <h1 > Sala de meios </h1>
                    <div className="input-field">
                        <input type="email"
                            placeholder="email"
                            onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                    </div>
                    <div className="input-field">
                        <input type='password'
                            placeholder='senha'
                            onChange={(e) => setPassword(e.target.value)} /><FaLock className="icon" />
                    </div>
                    <div className="recall-forget">
                        <label >
                            <input type="checkbox" />lembrar senha
                        </label>
                        <a href="#">Esqueci a senha</a>
                    </div>
                    <button onClick={() => navigate("/home")}>Entrar</button>

                    <div className="signup-link">
                        <p> <a href="#">Criar uma conta</a></p>
                    </div>
                </form>
            </div>
        </div>


    );

};

export default Login;