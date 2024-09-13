import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import "./Carga.css";
import { FaLock, FaUser } from "react-icons/fa";
import { InputText } from "primereact/inputtext";
import { acessorios, coletes, numeroDeSerie, portateis, portes } from "../../../Utils/api";

export default function Carga() {

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
                        <h1 > Sala de meios </h1>
                        <div className="input-field">
                            <select onChange={(e)=>verificaPt100(e.target.value)} >
                                <option>
                                    Porte
                                </option>
                                {portes.map((porte) => {
                                    return (
                                        <option value={porte.nome}>
                                            {porte.nome}
                                        </option>
                                    )
                                })}
                            </select>
                        </div>
                        {pt100 && 
                       <div className="input-field">
                       <select  >
                           <option>
                               Nº de Série
                           </option>
                           {numeroDeSerie.map((numero) => {
                               return (
                                   <option value={numero.nome}>
                                       {numero.nome}
                                   </option>
                               )
                           })}
                       </select>
                   </div>

                        }
                        <div className="input-field">
                            <input type="number"
                                placeholder="Carregadores"
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>

                        <div className="input-field">
                            <input type="Number"
                                placeholder="Munições"
                                onChange={(e) => setUsername(e.target.value)} />
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
                                onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input type="number"
                                placeholder="Munições"
                                onChange={(e) => setUsername(e.target.value)} />
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