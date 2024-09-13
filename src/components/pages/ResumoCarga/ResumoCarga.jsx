import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./ResumoCarga.css";
import { FaLock, FaUser } from "react-icons/fa";
import { InputText } from "primereact/inputtext";
import { acessorios, coletes, numeroDeSerie, portateis, portes } from "../../../Utils/api";

export default function ResumoCarga() {

    const [username, setUsername] = useState("");
    const [pt100, setPt100] = useState(false);
    const [password, setPassword] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        /* alert("dados enviados:" + username + " - " + password) */
    };

    const verificaPt100=(value)=>{
        console.log(value)
        if(value == 'PT 100'){
            setPt100(true) 
        }else{
            setPt100(false)
        }
    }

    return (
        <>
            <div className="geral">

                <div className="container">
                    <form onSubmit={handleSubmit}>
                        <h1 > Confirmação de carga </h1>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Porte"
                                onChange={(e) => setUsername(e.target.value)}
                                disabled />
                        </div>
                        {pt100 && 
                       <div className="input-field">
                       <input type="number"
                           placeholder="Nº de Série"
                           onChange={(e) => setUsername(e.target.value)}  disabled/>
                   </div>

                        }
                        <div className="input-field">
                            <input type="number"
                                placeholder="Carregadores"
                                onChange={(e) => setUsername(e.target.value)} disabled />
                        </div>

                        <div className="input-field">
                            <input type="Number"
                                placeholder="Munições"
                                onChange={(e) => setUsername(e.target.value)}  disabled/>
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Portateis"
                                onChange={(e) => setUsername(e.target.value)}  disabled/>
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Carregadores"
                                onChange={(e) => setUsername(e.target.value)} disabled />
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Munições"
                                onChange={(e) => setUsername(e.target.value)}  disabled/>
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Acessórios"
                                onChange={(e) => setUsername(e.target.value)}  disabled/>
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Colete"
                                onChange={(e) => setUsername(e.target.value)}  disabled/>
                        </div>
                       
                        <div className="input-field">
                            <input type='email'
                                placeholder='email'
                                onChange={(e) => setPassword(e.target.value)} /><FaUser className="icon" />
                        </div>

                        <div className="input-field">
                            <input type='password'
                                placeholder='senha'
                                onChange={(e) => setPassword(e.target.value)} /><FaLock className="icon" />
                        </div>
                        <div className="recall-forget">
                        </div>
                        <button onClick={() => navigate("/home")}>Carguear</button>
                    </form>
                </div>
            </div>

        </>
    )



}