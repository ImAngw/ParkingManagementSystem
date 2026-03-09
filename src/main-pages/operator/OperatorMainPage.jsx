import React, {useEffect, useState} from 'react';

import NewClientCard from "../../components/operator-components/cards/NewClientCard";
import NewSubscriptionCard from "../../components/operator-components/cards/NewSubscriptionCard";

import CarTable from "../../components/operator-components/tables/CarTable";
import PaymentsTable from "../../components/operator-components/tables/PaymentsTable";
import ContractTable from "../../components/operator-components/tables/ContractTable";


import plusIcon from "../../assets/plus.png";


import Sidebar from "../../components/operator-components/Sidebar";
import Header from "../../components/operator-components/Header";
import {ButtonsWafer, MoneyWafer, ActivityWafer, NextActivityWafer, OperatorWafer, FooterWafer} from "../../components/operator-components/OperatorWafers";
import MainCard from "../../components/operator-components/MainCard";
import TodayActivityCard from "../../components/operator-components/TodayActivityCard";
import PaymentsCard from "../../components/operator-components/PaymentsCard";

import euroIcon from "../../assets/euro.png";
import logoIcon from "../../assets/logo.png";
import {DXHeader} from "../../components/operator-components/OperatorWafers";
import FilterButton from "../../components/general-components/FilterButton";
import {Search} from "lucide-react";
import ParkingInfo from "../../components/operator-components/ParkingInfo";
import SubscriptionsInfo from "../../components/operator-components/SubscriptionsInfo";
import AddNewClient from "../../components/operator-components/AddNewClient";
import AddNewSubscription from "../../components/operator-components/AddNewSubcription";
import AddNewWash from "../../components/operator-components/AddNewWash";






export default function OperatorMainPage() {
    const [showAddClient, setShowAddClient] = React.useState(false);
    const [showAddSubscription, setShowAddSubscription] = React.useState(false);
    const [searchedStr, setSearchedStr] = React.useState("");
    const [showCars, setShowCars] = React.useState(true);
    const [showPaymentsTable, setShowPaymentsTable] = React.useState(false);
    const [showContracts, setShowContracts] = React.useState(false);



    const [showCarModal, setShowCarModal] = React.useState(false);
    const [showSubscriptionModal, setShowSubscriptionModal] = React.useState(false);
    const [showWashModal, setShowWashModal] = React.useState(false);
    const [showParkingModal, setShowParkingModal] = React.useState(true);
    const [showContractModal, setShowContractModal] = React.useState(false);


    const [showReceiptsModal, setShowReceiptsModal] = React.useState(false);
    const [showTodayCarModal, setShowTodayCarModal] = React.useState(true);




    const [view, setView] = useState("activity");
    const [mainView, setMainView] = useState("parking");


    useEffect(()=> {
        setSearchedStr("")
    }, [showCars, showPaymentsTable, showContracts])


    return (
        <div className="overflow-hidden h-screen flex">
            <Sidebar/>

            {/* SFONDO ICONE */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `url(${logoIcon})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: '50px 50px',
                    filter: 'grayscale(100%)',
                    opacity: 0.035,
                }}
            />

            <div className="relative w-full h-full overflow-auto ">
                <div className="grid grid-cols-12 grid-rows-12 h-full gap-2 min-w-[1300px] min-h-[800px] p-4">

                    {/* Filter + search bar */}
                    <div className="flex w-full col-span-4 col-start-1 row-start-1 row-span-1 items-center">
                        <div className="flex flex-row gap-4 w-full">
                            <FilterButton/>

                            <div className="flex w-full h-9 flex-1 bg-white border border-gray-100 shadow-xl rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-blue-300">
                                <Search className="w-5 h-5 text-gray-400 mr-2" />
                                <input
                                    id={"strName"}
                                    name={"strName"}
                                    autoComplete={"off"}
                                    type="text"
                                    placeholder="Cerca per nome..."
                                    className="outline-none text-sm text-gray-700 placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Name + date */}
                    <div className="col-span-3 col-start-10 row-start-1 row-span-1 ">
                        <DXHeader/>
                    </div>


                    {/*Money Wafer*/}
                    <div className="flex w-full col-span-2 col-start-5 row-start-2 row-span-1 items-center bg-white border shadow-md border-gray-200 rounded-xl ">
                        <MoneyWafer/>
                    </div>

                    {/*Activity Wafer*/}
                    <div className="flex w-full col-span-3 col-start-7 row-start-2 row-span-1 items-center bg-white border shadow-md border-gray-200 rounded-xl ">
                        <ActivityWafer/>
                    </div>

                    {/*Next Activity Wafer*/}
                    <div className="flex w-full col-span-2 col-start-10 row-start-2 row-span-1 items-center bg-white border shadow-md border-gray-200 rounded-xl ">
                        <NextActivityWafer/>
                    </div>

                    <div className="flex w-full col-span-1 col-start-12 row-start-2 row-span-1 items-center bg-white border shadow-md border-gray-200 rounded-xl ">
                        <OperatorWafer/>
                    </div>




                    <div className="col-span-4 col-start-1 row-start-2 row-span-11 border border-gray-200 rounded-xl overflow-y-auto shadow-md flex flex-col">
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
                                <TodayActivityCard/>
                            )}

                            {view === "payments" && (
                                <PaymentsCard />
                            )}
                        </div>

                    </div>

                    <div className="col-span-8 col-start-5 row-start-3 row-span-10 border border-gray-200 rounded-xl overflow-y-auto shadow-md flex flex-col">
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
                                    Parcheggio
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
                                    onClick={() => setMainView("newClient")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        mainView === "newClient"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <p style={{fontSize:10}}>Nuovo</p>
                                        <p>Cliente</p>
                                    </div>
                                </button>

                                <button
                                    onClick={() => setMainView("newSubs")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        mainView === "newSubs"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <p style={{fontSize:10}}>Nuovo</p>
                                        <p>Abbonamento</p>
                                    </div>
                                </button>


                                <button
                                    onClick={() => setMainView("newWash")}
                                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                        mainView === "newWash"
                                            ? "bg-white text-gray-900 shadow-sm"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    <div className="flex flex-col items-center justify-center">
                                        <p style={{fontSize:10}}>Nuovo</p>
                                        <p>Lavaggio</p>
                                    </div>
                                </button>


                            </div>
                        </div>

                        {/* Contenuto scrollabile */}
                        <div className="flex-1 overflow-y-auto px-4 py-3">
                            {mainView === "parking" && (
                                <ParkingInfo/>
                            )}

                            {mainView === "subscriptions" && (
                                <SubscriptionsInfo/>
                            )}

                            {mainView === "newClient" && (
                                <AddNewClient/>
                            )}

                            {mainView === "newSubs" && (
                                <AddNewSubscription/>
                            )}

                            {mainView === "newWash" && (
                                <AddNewWash/>
                            )}
                        </div>

                    </div>

                </div>
            </div>


            {/*
            <div className="flex flex-col w-full overflow-y-auto overflow-x-auto ">
                <div className="h-[10%]  bg-red-600">
                    <Header/>
                </div>

                <div className="flex-1 overflow-x-auto overflow-y-auto">

                    <div className="grid grid-cols-12 grid-rows-12 gap-2 h-full min-w-[1100px] min-h-[700px] pl-6 pr-6 pb-6">
                        <div className="relative col-span-4 row-span-11 border-2 rounded-xl min-h-[200px] bg-red-100">
                            {showTodayCarModal && (
                                <div className="h-full">
                                    <TodayActivityCard/>
                                </div>
                            )}

                            {showReceiptsModal && (
                                <div className="h-full">
                                    <PaymentsCard/>
                                </div>
                            )}


                        </div>

                        <div className="col-span-4 col-start-1 row-start-12 row-span-1 rounded-xl min-h-[50px]">
                            <FooterWafer
                                showReceiptsModal={showReceiptsModal}
                                setShowReceiptsModal={setShowReceiptsModal}
                                showCarModal={showTodayCarModal}
                                setShowCarModal={setShowTodayCarModal}
                            />
                        </div>

                        <div className="col-span-6 col-start-7 row-start-1 row-span-1">
                            <HeaderWafer/>
                        </div>

                        <div className="col-span-6 col-start-7 row-start-2 row-span-1  min-h-[50px]">
                            <ButtonsWafer
                                showCarModal={showCarModal}
                                setShowCarModal={setShowCarModal}
                                showSubscriptionModal={showSubscriptionModal}
                                setShowSubscriptionModal={setShowSubscriptionModal}
                                showWashModal={showWashModal}
                                setShowWashModal={setShowWashModal}
                                showParkingModal={showParkingModal}
                                setShowParkingModal={setShowParkingModal}
                                showContractModal={showContractModal}
                                setShowContractModal={setShowContractModal}
                            />
                        </div>



                        <div className="col-span-2 col-start-5 row-start-1 row-span-2 rounded-xl border-1 min-h-[100px]">
                            <MoneyWafer/>
                        </div>


                        <div className="col-span-8 col-start-5 row-start-3 border-2 row-span-10  rounded-xl min-h-[300px] ">
                            <MainCard
                                showNewClientCard={showCarModal}
                                showSubscriptionModal={showSubscriptionModal}
                                showWashModal={showWashModal}
                                showParkingModal={showParkingModal}
                                showSubscriptionsInfo={showContractModal}
                            />
                        </div>
                    </div>
                </div>
            </div>

            */}




            {/*
            {showAddClient && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <NewClientCard setShowModal={setShowAddClient}/>
                </div>
            )}

            {showAddSubscription && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <NewSubscriptionCard setShowModal={setShowAddSubscription}/>
                </div>
            )}




             <div className="px-9 pt-5 flex justify-between bg-transparent">
                <div className="w-full flex flex-col gap-4">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="text-sm m-0 text-gray-500 italic" style={{ fontSize: 9 }}>
                                Nostro Nome
                            </p>
                            <h1 className="text-2xl font-bold text-gray-800">
                                PARCHEGGIO — Nome Parcheggio
                            </h1>
                            <p className="text-sm text-gray-500 italic">
                                Operatore 1
                            </p>
                        </div>

                        <div className="flex gap-4">

                            <button
                                onClick={() => setShowAddClient(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
                            >
                                <img src={plusIcon} alt="" className="w-5 h-5" />
                                <span>Aggiungi auto</span>
                            </button>

                            <button
                                onClick={() => setShowAddSubscription(true)}
                                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                <img src={plusIcon} alt="" className="w-5 h-5" />
                                <span>Abbonamento</span>
                            </button>

                        </div>
                    </div>


                    <div className="flex gap-2 border-b pb-1">

                        <button
                            onClick={() => {
                                setShowCars(true);
                                setShowPaymentsTable(false);
                                setShowContracts(false);
                            }}
                            className={`px-4 py-2 rounded-t-lg font-medium transition
                                ${showCars
                                ? 'bg-green-100 text-green-700 border border-b-0'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            🚗 Vetture
                        </button>

                        <button
                            onClick={() => {
                                setShowCars(false);
                                setShowPaymentsTable(false);
                                setShowContracts(true);
                            }}
                            className={`px-4 py-2 rounded-t-lg font-medium transition
                                ${showContracts
                                ? 'bg-green-100 text-green-700 border border-b-0'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            📄 Abbonamenti
                        </button>

                        <button
                            onClick={() => {
                                setShowCars(false);
                                setShowPaymentsTable(true);
                                setShowContracts(false);
                            }}
                            className={`px-4 py-2 rounded-t-lg font-medium transition
                                ${showPaymentsTable
                                ? 'bg-green-100 text-green-700 border border-b-0'
                                : 'text-gray-600 hover:bg-gray-100'
                            }`}
                        >
                            💳 Pagamenti
                        </button>
                    </div>
                </div>

            </div>

            {showCars &&
                <CarTable
                    searchedStr={searchedStr}
                    setSearchedStr={setSearchedStr}
                />
            }

            {showPaymentsTable && <PaymentsTable
                searchedStr={searchedStr}
                setSearchedStr={setSearchedStr}/>
            }

            {showContracts && <ContractTable
                searchedStr={searchedStr}
                setSearchedStr={setSearchedStr}/>
            }
             */}
        </div>
    )
}