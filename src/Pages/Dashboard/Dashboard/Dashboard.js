import React from 'react';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import Sidebar from '../Sidebar/Sidebar';
import'./Dashboard.css'
const Dashboard = () => {
    return (
        <div className="dashboard">
            <DashboardHeader></DashboardHeader>
            <Sidebar></Sidebar>
        </div>
    );
};

export default Dashboard;