import React from 'react';
import Header from "../../components/admin-components/Header";
import Footer from "../../components/admin-components/Footer";
import ParkingOneContent from "../../pages-content/ParkingOneContent";


export default function ParkingOne() {
    return (
        <div>
            <Header/>
            <ParkingOneContent/>
            <Footer/>
        </div>
    );
}