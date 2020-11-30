import React from "react";
import { Header } from "../../components/header";

const Home = () => {
    const handleClick = () => {
        alert('134');
    }
    return <div>
        <div>Home</div>
        <Header />
        <button onClick={handleClick}>button 111</button>
    </div>
}

export default Home;