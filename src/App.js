import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignInPage from "./admin/components/SignInPage";
import SignUp from "./admin/components/SignUp";
import Dashboard from "./admin/components/Dashboard";
import AddCP from "./admin/crudcp/AddCP";
import DeleteCP from "./admin/crudcp/DeleteCP";
import UpdateCP from "./admin/crudcp/UpdateCP";
import CPList from "./admin/crudcp/CPList";
import Settings from "./admin/crudcp/Settings";
import Subscription from "./admin/crudcp/Subscription";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/add" component={AddCP} />
        <Route path="/delete" component={DeleteCP} />
        <Route path="/update" component={UpdateCP} />
        <Route path="/list" component={CPList} />
        <Route path="/subscription" component={Subscription} />
        <Route path="/settings" component={Settings} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
