import React, {useState} from 'react';
import Sidebar from "../../components/admin-components/Sidebar";
import logoIcon from "../../assets/logo.png";
import {ActivityWafer, DXHeader, InfoParkingWafer, SXHeader} from "../../components/admin-components/DashboardWafers";
import TodayActivityCard from "../../components/operator-components/TodayActivityCard";
import PaymentsCard from "../../components/operator-components/PaymentsCard";
import ParkingInfo from "../../components/operator-components/ParkingInfo";
import SubscriptionsInfo from "../../components/operator-components/SubscriptionsInfo";
import ClientInfo from "../../components/operator-components/ClientInfo";
import FilterButton from "../../components/general-components/FilterButton";


import {Search} from "lucide-react";




export default function AdminParkingOnePage() {
    const today = new Date();



    const [view, setView] = useState("activity");
    const [mainView, setMainView] = useState("parking");


    const activityData = [
        { name: "Soste", value: 125, fill:"green" },
        { name: "Lavaggi", value: 14, fill:"red" },
        { name: "Abbonamenti", value: 10, fill:"blue" },
    ];

    const moneyData = [
        { name: "€  Contanti", value: 1000, fill:"#FBC02D" },
        { name: "€  Carta", value: 300, fill:"#FFF59D" },
    ];

    return (
        <div className="overflow-hidden h-screen flex">
            <Sidebar/>
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${logoIcon})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '100px 100px',
                    filter: 'grayscale(100%)',
                    opacity: 0.035,
                }}
            />

            <div className="relative w-full h-full overflow-auto ">
                <div className="grid grid-cols-12 grid-rows-12 h-full gap-2 min-w-[1300px] min-h-[900px] p-4">
                    <div className="flex w-full  col-span-3 col-start-1 row-start-1 row-span-1 items-center">
                        <div className="flex flex-row gap-4 w-full">
                            <FilterButton/>

                            <div className="flex w-full h-9 flex-1 bg-white border border-gray-100 shadow-xl rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-300">
                                <Search className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Cerca per nome..."
                                    className="outline-none text-sm text-gray-700 placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 col-start-10 row-start-1 row-span-1 ">
                        <DXHeader/>
                    </div>

                    <div className="col-span-3 col-start-1 row-start-2 row-span-3  rounded-xl">
                        <InfoParkingWafer
                            name={"Parcheggio 1"}
                            carsInside={15}
                            capacity={50}
                            cashTotal={1300}
                            status={"open"}
                        />
                    </div>


                    <div className="col-span-3 col-start-1 row-start-5 row-span-4 rounded-xl bg-white">
                        <ActivityWafer
                            title={"Servizi erogati"}
                            subtitle={"Servizi erogati oggi" + " " + today.toLocaleDateString(("it-IT"), {day:"2-digit", month:"long", year:"numeric"})}
                            data={activityData}
                        />
                    </div>

                    <div className="col-span-3 col-start-1 row-start-9 row-span-4 rounded-xl bg-white">
                        <ActivityWafer
                            title={"Guadagni"}
                            subtitle={"Totale della giornata: 1300€"}
                            data={moneyData}
                        />
                    </div>


                    <div className="col-span-3 col-start-4 row-start-2 row-span-11 border border-gray-200 rounded-xl overflow-y-auto shadow-md flex flex-col">

                        {/* Toggle fisso in alto */}
                        <div className="sticky top-0 z-10  border-gray-200 px-4 py-3">
                            <div className="flex w-full bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setView("activity")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        view === "activity"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Attività di oggi
                                </button>
                                <button
                                    onClick={() => setView("payments")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        view === "payments"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Pagamenti
                                </button>
                            </div>
                        </div>

                        {/* Contenuto scrollabile */}
                        <div className="flex-1 overflow-y-auto px-4 py-3">
                            {view === "activity" && (
                                <TodayActivityCard isAdmin={true} />
                            )}

                            {view === "payments" && (
                                <PaymentsCard />
                            )}
                        </div>

                    </div>

                    <div className="col-span-6 col-start-7 row-start-2 row-span-11  border border-gray-200  rounded-xl overflow-y-auto shadow-md flex flex-col">
                        {/* Toggle fisso in alto */}
                        <div className="sticky top-0 z-10  border-gray-200 px-4 py-3">
                            <div className="flex w-full bg-gray-100 rounded-lg p-1">
                                <button
                                    onClick={() => setMainView("parking")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        mainView === "parking"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Auto Dentro
                                </button>
                                <button
                                    onClick={() => setMainView("subscriptions")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        mainView === "subscriptions"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Abbonamenti
                                </button>

                                <button
                                    onClick={() => setMainView("clients")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        mainView === "clients"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    Clienti
                                </button>
                            </div>
                        </div>

                        {/* Contenuto scrollabile */}
                        <div className="flex-1 overflow-y-auto px-4 py-3">
                            {mainView === "parking" && (
                                <ParkingInfo isAdmin={true}/>
                            )}

                            {mainView === "subscriptions" && (
                                <SubscriptionsInfo isAdmin={true}/>
                            )}

                            {mainView === "clients" && (
                                <ClientInfo/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}