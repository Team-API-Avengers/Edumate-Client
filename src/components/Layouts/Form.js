import React from 'react';
import AuthenticationHeader from '../Shared/AuthenticationHeader';
import { Outlet } from 'react-router-dom';

const Form = () => {
    return (
        <div>
            <AuthenticationHeader />
            <Outlet/>
            
        </div>
    );
};

export default Form;