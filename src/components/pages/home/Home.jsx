
import "./Home.css";
import { Button } from "primereact/button";
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useRef, useState } from "react";
import Armas from "../Armas/Armas";

export default function Home() {

    const menuLeft = useRef(null);
    const menuRight = useRef(null);
    const toast = useRef(null);
    const [isArma, setIsArma] = useState(false);

    const itemsBelico = [
        {
            items: [
                {
                    label: 'Armas',
                    command: () => {
                        setIsArma(true);
                    }
                },
                {
                    label: 'Coletes',
                },
                {
                    label: 'Munição',
                }
            ]
        }
    ];

    const itemsNaoBelico = [
        {
            items: [
                {
                    label: 'Guarda-chuvas',
                    command: () => {
                       
                    }
                },
                {
                    label: 'Giro-flex',
                    command: () => {
                      
                    }
                },
                {
                    label: 'Cone',
                    command: () => {
                       
                    }
                }
            ]
        }
    ];


    return (
        <div >
            <h1 className="home_h1" > Sala de meios</h1>
            <div className="container_home">
                <nav className="nav">
                    <div className="card flex justify-content-center">
                        <Toast ref={toast}></Toast>
                        <Menu model={itemsBelico} popup ref={menuLeft} id="popup_menu_left" />

                        <Button label="Bélico"  className="btn-home" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_left" aria-haspopup />
                        <Menu model={itemsNaoBelico} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />

                        <Button label="Não Bélico" className="btn-home" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                    </div>
                </nav>
            </div>
        {isArma &&
            <Armas />
        }
        </div>

    );

}
