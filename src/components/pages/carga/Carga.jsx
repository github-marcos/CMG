import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./Carga.css";
import { FaLock, FaUser } from "react-icons/fa";
import { InputText } from "primereact/inputtext";
import { acessorios, coletes, portateis, portes } from "../../../Utils/api";

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
                            <select >
                                <option>
                                    Porte
                                </option>
                                {portes.map((porte) => {
                                    return (
                                        <option>
                                            {porte.nome}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Carregadores"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                            <input type="Number"
                                placeholder="Munições"
                                onChange={(e) => setUsername(e.target.value)} /><FaUser className="icon" />
                        </div>
                        <div className="input-field">
                        <select >
                                <option>
                                    Portateis
                                </option>
                                {portateis.map((portatil) => {
                                    return (
                                        <option>
                                            {portatil.nome}
                                        </option>
                                    )
                                })}
                            </select>
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
                        <select >
                                <option>
                                    Acessorio
                                </option>
                                {acessorios.map((acessorio) => {
                                    return (
                                        <option>
                                            {acessorio.nome}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="input-field">
                        <select >
                                <option>
                                    Colete
                                </option>
                                {coletes.map((colete) => {
                                    return (
                                        <option>
                                            {colete.nome}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className="input-field">
                            <input type='email'
                                placeholder='E-mail'
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