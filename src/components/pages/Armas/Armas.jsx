import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';
import { OrderList } from 'primereact/orderlist';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import "./Armas.css";
import { Tooltip } from "primereact/tooltip";

export default function Armas() {

    const [selectedArma, setSelectedArma] = useState(null);
    const [products, setProducts] = useState([
        { id: "1", category: "SEY77771", name: "Sd Oliveira", date: formatDateToBR(new Date()) },
        { id: "2", category: "SEY77771", name: "Sd Oliveira", date: formatDateToBR(new Date()) },
        { id: "3", category: "SEY77771", name: "Sd Oliveira", date: formatDateToBR(new Date()) },
        { id: "4", category: "SEY77771", name: "Sd Oliveira", date: formatDateToBR(new Date()) },
        { id: "5", category: "SEY77771", name: "Sd Oliveira", date: formatDateToBR(new Date()) },
    ]);

    const cities = [
        { name: 'PT100', code: 'NY' },
        { name: 'PT840', code: 'RM' },
        { name: 'PT740', code: 'LDN' },
        { name: 'PT640', code: 'IST' },
        { name: 'G22', code: 'PRS' },
        { name: 'BERETA SFX', code: 'SFX' }
    ];

    console.log("teste",products)

    function formatDateToBR(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Os meses são indexados a partir de 0
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }


    return (
        <>
            <div className="select-armas">
                <h1>Armas</h1>
                <label>Selecione uma Arma:</label>
                <Dropdown value={selectedArma} onChange={(e) => setSelectedArma(e.value)} options={cities} optionLabel="name"
                    placeholder="Selecionar" className="select" />
            </div>
            {selectedArma &&
                <div className="tables">
                    <div className="card-table">
                        <h1 style={{ color: '#01aa01' }}>Não Cargueadas</h1>
                        <DataTable value={products} tableStyle={{ minWidth: '100%', color: 'red' }}>
                            <Column className="" field="id" header="Id" style={{ color: '#01aa01' }}></Column>
                            <Column field="category" header="Tipe" style={{ color: '#01aa01' }}></Column>
                            <Column field="name" header="Nome" style={{ color: '#01aa01' }}></Column>
                        </DataTable>
                    </div>
                    <div className="card-table">
                        <h1 style={{ color: '#ff0000' }}>Cargueadas</h1>
                        <DataTable value={products} tableStyle={{ minWidth: '100%', color: 'red' }}>
                            <Column className="" field="id" header="Id" style={{ color: '#ff0000' }}></Column>
                            <Column field="category" header="Tipe" style={{ color: '#ff0000' }}></Column>
                            <Column field="name" header="Nome" style={{ color: '#ff0000' }}></Column>
                            <Column field="date" header="Data" style={{ color: '#ff0000' }}></Column>
                        </DataTable>
                    </div>
                </div>
            }

        </>
    )
}