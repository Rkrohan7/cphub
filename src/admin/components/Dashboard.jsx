import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddCP from "../crudcp/AddCP";
import DeleteCP from "../crudcp/DeleteCP";
import UpdateCP from "../crudcp/UpdateCP";
import CPList from "../crudcp/CPList";
import Settings from "../crudcp/Settings";
import Subscription from "../crudcp/Subscription";
// Import other components for the remaining routes

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/5 bg-gray-800 text-white p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <ul className="space-y-4">
          <li>
            <Link to="/add" className="cursor-pointer hover:text-gray-300">
              Add CP
            </Link>
          </li>
          <li>
            <Link to="/delete" className="cursor-pointer hover:text-gray-300">
              Delete CP
            </Link>
          </li>
          <li>
            <Link to="/update" className="cursor-pointer hover:text-gray-300">
              Update C
            </Link>
          </li>
          <li>
            <Link to="/list" className="cursor-pointer hover:text-gray-300">
              CP List
            </Link>
          </li>
          <li>
            <Link
              to="/subscription"
              className="cursor-pointer hover:text-gray-300"
            >
              Subscription
            </Link>
          </li>
          <li>
            <Link to="/settings" className="cursor-pointer hover:text-gray-300">
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-4/5 p-6">
        <h2 className="text-xl font-bold mb-4">Welcome to the Dashboard</h2>
        {/* Add your main content here */}
       
        <div className="w-4/5 p-6">
          {/* Add your main content here */}
          <AddCP /> {/* The AddCP component will be displayed */}
        </div>
        
        <div className="w-4/5 p-6">
          {/* Add your main content here */}
          <DeleteCP /> {/* The DeleteCP component will be displayed */}
        </div>
        
        <div className="w-4/5 p-6">
          {/* Add your main content here */}
          <UpdateCP /> {/* The UpdateCP component will be displayed */}
        </div>
       
        <div className="w-4/5 p-6">
          {/* Add your main content here */}
          <CPList /> {/* The CPList component will be displayed */}
        </div>
      
        <div className="w-4/5 p-6">
          {/* Add your main content here */}
          <Subscription /> {/* The Subscription component will be displayed */}
        </div>
       
        <div className="w-4/5 p-6">
          {/* Add your main content here */}
          <Settings /> {/* The Settings component will be displayed */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
