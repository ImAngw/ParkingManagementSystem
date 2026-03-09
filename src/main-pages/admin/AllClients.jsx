import React from 'react';
import Header from "../../components/admin-components/Header";
import Footer from "../../components/admin-components/Footer";
import ClientsContent from "../../pages-content/ClientsContent";



export default function AllClients() {
    return (
        <div>
            <Header/>
            <ClientsContent/>
            <Footer/>
        </div>
    );
}