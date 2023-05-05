import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../Shared/Header';

const Settings = () => {
    return (
        <div>
        <Header />
        <div className="drawer drawer-mobile">
          
          <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  
  
  
          <div className="drawer-content">
            <Outlet></Outlet>
  
            <label
              htmlFor="dashboard-drawer"
              className="btn btn-primary drawer-button hidden"
            >
              Open drawer
            </label>
          </div>
  
          <div className="drawer-side border">
            <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-60 bg-base-100 text-base-content">
              <Link to="/home" className="flex lg:hidden mb-10">
                <img
                  src="PremiCar.png"
                  className="mr-3 h-6 sm:h-9 rounded-lg"
                  alt="PremiCar Logo"
                />
                <span className="self-center text-xl font-semibold  ">
                  PremiCar
                </span>
              </Link>

              
              <li className=" ">
                <Link to="/settings">Banner</Link>
              </li>
              

            </ul>
          </div>
        </div>
      </div>
    );
};

export default Settings;