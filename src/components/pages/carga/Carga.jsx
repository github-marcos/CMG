import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./Carga.css";
import { FaLock, FaUser } from "react-icons/fa";

export default function Carga() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        /* alert("dados enviados:" + username + " - " + password) */
    };

    return (
        <>
            <div className="geral">
                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h1 > Sala de meios </h1>
                        <div className="input-field">
                            <input type="email"
                                placeholder="Porte"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="email"
                                placeholder="Carregadores"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="Number"
                                placeholder="Munições"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="name"
                                placeholder="Portatel"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Carregadores"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Munições"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="name"
                                placeholder="Acessórios"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="name"
                                placeholder="Nome"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type='name'
                                placeholder='senha'
                                onChange={(e) => setPassword(e.target.value)} /><FaLock className="icon" />
                        </div>
                        <div className="input-field">
                            <input type='password'
                                placeholder='senha'
                                onChange={(e) => setPassword(e.target.value)} /><FaLock className="icon" />
                        </div>
                        <div className="recall-forget">
                        </div>
                        <button onClick={() => navigate("/home")}>Pagar</button>
                    </form>
                </div>
            </div>

        </>
    )



}