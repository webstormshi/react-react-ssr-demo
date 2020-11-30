import React from "react";

const Home = () => {
    const handleClick = () => {
        alert('134');
    }
    return <div>
        <div>Home</div>
        <button onClick={handleClick}>button 111</button>
    </div>
}

export default Home;