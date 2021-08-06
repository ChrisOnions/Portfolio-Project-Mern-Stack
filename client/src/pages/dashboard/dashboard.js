import React from 'react';
import Auth from "../../utils/auth";
import Login from "../../pages/login/Login";
import Cards from '../../components/dashboardCards/dashCard';

export default function Dashboard() {

  return (
    <div className="sizeContainer">
      {Auth.loggedIn()
        ? <div>
          <Cards />
        </div>
        : <Login />}
    </div>

  )
}