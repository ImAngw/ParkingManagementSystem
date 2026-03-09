import React from 'react';
import parkingImage from "../assets/images/parking.jpeg";
import adminImage from "../assets/images/admin.jpeg";
import logoIcon from "../assets/logo.png";
import {useNavigate} from "react-router-dom";



export default function SelectionPage() {
    const navigate = useNavigate();

    return (
        <div className="overflow-y-auto h-screen flex min-w-[1100px] min-h-[700px] relative bg-gray-50">

            {/* SFONDO ICONE */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${logoIcon})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '120px 120px',
                    filter: 'grayscale(100%)',
                    opacity: 0.05,
                }}
            />

            <div className="flex flex-col w-full overflow-auto relative">

                <div className="grid grid-cols-12 grid-rows-12 gap-6 h-full min-w-[1100px] min-h-[700px] p-6">

                    {/* Titolo principale */}
                    <div className="col-span-9 col-start-3 row-span-2 row-start-2 flex flex-col justify-start items-start px-6 space-y-4">
                        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900">
                            Parking Management System <span className="italic text-indigo-500 text-xl sm:text-2xl">Demo</span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-700 italic max-w-xl">
                            Il tuo nuovo sistema di gestione dei parcheggi
                        </p>
                        <p className="text-sm text-gray-500 italic mt-4">
                            N.B. Per un'esperienza ottimale, si consiglia di visualizzare da tablet o da desktop.
                        </p>
                    </div>

                    {/* OPERATORE */}
                    <button
                        className="col-span-4 col-start-3 row-start-5 row-span-6 overflow-hidden rounded-3xl relative group shadow-2xl
                           transform transition duration-300 hover:scale-105 active:scale-95 border-4 border-indigo-500"
                        onClick={() => navigate("/operator")}
                    >
                        {/* Immagine di sfondo */}
                        <img
                            src={parkingImage}
                            alt="Operatore"
                            className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-90 transition"
                        />

                        {/* Overlay sfumato */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/30 group-hover:from-black/30 group-hover:to-black/50 transition" />

                        {/* Contenuto */}
                        <div className="relative z-10 h-full flex flex-col p-6 text-white">

                            {/* Titolo in alto a sinistra */}
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-lg">
                                Operatore
                            </h2>

                            {/* Descrizione centrata */}
                            <div className="flex-1 flex items-center justify-center text-center">
                                <p className="text-lg sm:text-xl max-w-xs drop-shadow-md">
                                    Accedi alla schermata operatore per gestire le attività quotidiane e le operazioni di parcheggio.
                                </p>
                            </div>

                        </div>
                    </button>

                    {/* ADMIN */}
                    <button
                        className="col-span-4 col-start-7 row-start-5 row-span-6 overflow-hidden rounded-3xl relative group shadow-2xl
                           transform transition duration-300 hover:scale-105 active:scale-95 border-4 border-yellow-400"
                        onClick={() => navigate("/admin")}
                    >
                        <img
                            src={adminImage}
                            alt="Admin"
                            className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:brightness-90 transition"
                        />

                        {/* Overlay sfumato */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-black/30 group-hover:from-black/30 group-hover:to-black/50 transition" />

                        {/* Contenuto */}
                        <div className="relative z-10 h-full flex flex-col p-6 text-white">

                            {/* titolo in alto a sinistra */}
                            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wide drop-shadow-lg">
                                Admin
                            </h2>

                            {/* descrizione centrata */}
                            <div className="flex-1 flex items-center justify-center text-center">
                                <p className="text-lg sm:text-xl max-w-xs drop-shadow-md">
                                    Accedi alla dashboard amministratore per gestire utenti, dati e impostazioni del sistema.
                                </p>
                            </div>

                        </div>
                    </button>

                </div>
            </div>
        </div>


    );
}