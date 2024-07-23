
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
                    template: () => (
                        <span
                            className="p-1 w-[250px]  cursor-pointer hover:bg-[#e1e1e1] "
                            onClick={() => setIsArma(true)}
                            style={{ display: 'inline-block' }} // Adicionado para garantir a aplicação da largura
                        >
                            Armas
                        </span>
                    ),
                },
                {
                    template: () => (
                        <span
                            className="p-1 w-[250px]  cursor-pointer hover:bg-[#e1e1e1] "
                            onClick={() => setIsArma(true)}
                            style={{ display: 'inline-block' }} // Adicionado para garantir a aplicação da largura
                        >
                            Coletes
                        </span>
                    ),
                },
                {
                    template: () => (
                        <span
                            className="p-1 w-[250px]  cursor-pointer hover:bg-[#e1e1e1] "
                            onClick={() => setIsArma(true)}
                            style={{ display: 'inline-block' }} // Adicionado para garantir a aplicação da largura
                        >
                            Munições
                        </span>
                    ),
                }
            ]
        }
    ];

    const itemsNaoBelico = [
        {
            items: [
                {
                    template: () => (
                        <span
                            className="p-1 w-[250px]  cursor-pointer hover:bg-[#e1e1e1] "
                            onClick={() => setIsArma(true)}
                            style={{ display: 'inline-block' }} // Adicionado para garantir a aplicação da largura
                        >
                            Giro-flex
                        </span>
                    ),
                },
                {
                    template: () => (
                        <span
                            className="p-1 w-[250px] cursor-pointer hover:bg-[#e1e1e1] "
                            onClick={() => setIsArma(true)}
                            style={{ display: 'inline-block' }} // Adicionado para garantir a aplicação da largura
                        >
                            Guarda-chuva
                        </span>
                    ),
                },
                {
                    template: () => (
                        <span
                            className="p-1 w-[250px]  cursor-pointer hover:bg-[#e1e1e1] "
                            onClick={() => setIsArma(true)}
                            style={{ display: 'inline-block' }} // Adicionado para garantir a aplicação da largura
                        >
                            Cones
                        </span>
                    ),
                }
            ]
        }
    ];


    return (
        <div className="bg-[#e1e1e1]">
            <div className="pb-8 bg-[#ffee00] w-full flex flex-col justify-center">
                <h1 className="text-4xl mt-8 text-center font-bold" > Sala de meios</h1>
                <div className="flex w-full justify-center">
                    <nav className="">
                        <div className="card flex justify-content-center">
                            <Toast ref={toast}></Toast>
                            <Menu className=" w-[250px]" model={itemsBelico} popup ref={menuLeft} id="popup_menu_left" />

                            <Button label="Bélico" className="btn-home" onClick={(event) => menuLeft.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                            <Menu className=" w-[250px]" model={itemsNaoBelico} popup ref={menuRight} id="popup_menu_right" popupAlignment="right" />

                            <Button label="Não Bélico" className="btn-home" onClick={(event) => menuRight.current.toggle(event)} aria-controls="popup_menu_right" aria-haspopup />
                        </div>
                    </nav>

                </div>
            </div>
            <div className="bg-[#e1e1e1] h-screen">

                {isArma &&

                    <Armas />

                }
            </div>
        </div>

    );

}
