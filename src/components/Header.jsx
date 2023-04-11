import React, {useState} from 'react';
import "../styles/header.css";

const Header = () => {

    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
        setIsActive(!isActive);
    };

    const handleScroll = () => {
        setIsActive(false);
    };

    window.addEventListener('scroll', handleScroll);

    return (
        <header>

            <a href="#" className="logo"><span>Ingatlan</span>közvetítő</a>

            <nav className={`navbar ${isActive ? 'active' : ''}`}>
                <a href="#home">Kezdőlap</a>
                <a href="#services">Szolgáltatások</a>
                <a href="#featured">Kiemelt</a>
                <a href="#agents">Ügynökök</a>
                <a href="#contact">Elérhetőség</a>
            </nav>

            <div className="icons">
                <div id="menu-bars" onClick={handleMenuClick} className="fas fa-bars"></div>
                <a href="#" className="fas fa-heart"></a>
                <a href="#" className="fas fa-user"></a>
            </div>

        </header>
    );
};

export default Header;