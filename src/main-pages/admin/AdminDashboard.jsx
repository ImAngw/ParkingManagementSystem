import React from 'react';
import Header from "../../components/admin-components/Header";
import AdminContent from "../../pages-content/AdminPageContent";
import Footer from "../../components/admin-components/Footer";


export default function AdminDashboard() {
    return (
        <div>
            <Header/>
            <AdminContent/>
            <Footer/>
        </div>
    );
}

