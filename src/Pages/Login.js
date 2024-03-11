import React from 'react';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import LoginData from '../Components/LoginData/LoginData';
function Login() {
    return(
        <>
            <Navbar />
            <LoginData/>
            <Footer/>
        </>
    );
}
export default Login;