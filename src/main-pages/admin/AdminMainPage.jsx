import React from 'react';
import Sidebar from "../../components/admin-components/Sidebar";
import {SXHeader, DXHeader, SelectionCard, BarChartWafer, PricesWafer,
    InfoParkingWafer, RevenueWafer, ActivityWafer} from "../../components/admin-components/DashboardWafers";

import logoIcon from "../../assets/logo.png";



export default function AdminMainPage() {
    const activityData = [
        { name: "Soste", value: 1500, fill:"green" },
        { name: "Lavaggi", value: 600, fill:"red" },
        { name: "Abbonamenti", value: 120, fill:"blue" },
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

                    <div className="col-span-6 col-start-1 row-start-1 row-span-1">
                        <SXHeader title="Dashboard"/>
                    </div>

                    <div className="col-span-6 col-start-7 row-start-1 row-span-1">
                        <DXHeader/>
                    </div>

                    <div className=" col-span-6 col-start-1 row-start-2 row-span-4 bg-red-100 rounded-xl">
                        <SelectionCard/>
                    </div>

                    <div className=" col-span-3 col-start-1 row-start-6 row-span-7 rounded-xl">
                        <RevenueWafer/>
                    </div>

                    <div className="col-span-3 col-start-4 row-start-6 row-span-3  rounded-xl">
                        <InfoParkingWafer
                            name={"Parcheggio 1"}
                            carsInside={15}
                            capacity={50}
                            cashTotal={1300}
                            status={"open"}
                        />
                    </div>

                    <div className="col-span-3 col-start-4 row-start-9 row-span-4  rounded-xl">
                        <ActivityWafer
                            title={"Servizi erogati"}
                            subtitle={"Nel periodo di riferimento"}
                            data={activityData}
                        />
                    </div>


                    <div className="col-span-6 col-start-7 row-start-2 row-span-4 bg-green-100 rounded-xl">
                        <BarChartWafer/>
                    </div>

                    <div className="col-span-6 col-start-7 row-start-6 row-span-7 bg-gray-400 rounded-xl">
                        <PricesWafer/>
                    </div>
                </div>

            </div>
        </div>
    );
}