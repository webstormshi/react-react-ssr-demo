import React from "react";
import { Header } from "../../components/header";

const Login = () => {
    const handleClick = () => {
        alert('134');
    }
    return <div>
        <div>Login</div>
        <Header />
        <button onClick={handleClick}>button 111</button>
    </div>
}

export default Login;