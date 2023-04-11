import React from 'react';
import "../styles/agents.css";
import Picture_1 from "../images/pic-1.jpg";
import Picture_2 from "../images/pic-2.png";
import Picture_3 from "../images/pic-3.jpg";
import Picture_4 from "../images/pic-4.png";

const Agents = () => {
    return (
        <section className="agents" id="agents">

            <h1 className="heading"> Professzionális <span>Ügynökök</span></h1>

            <div className="box-container">

                <div className="box">
                    <a href="#" className="fas fa-envelope"></a>
                    <a href="#" className="fas fa-phone"></a>
                    <img src={Picture_1} alt="picture_1"/>
                        <h3>Molnár Evelin</h3>
                        <span>Ügynök</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                </div>

                <div className="box">
                    <a href="#" className="fas fa-envelope"></a>
                    <a href="#" className="fas fa-phone"></a>
                    <img src={Picture_2} alt="picture_2"/>
                        <h3>Molnár Gréta</h3>
                        <span>Ügynök</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                </div>

                <div className="box">
                    <a href="#" className="fas fa-envelope"></a>
                    <a href="#" className="fas fa-phone"></a>
                    <img src={Picture_3} alt="picture_3"/>
                        <h3>Molnár Ildikó</h3>
                        <span>Ügynök</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                </div>

                <div className="box">
                    <a href="#" className="fas fa-envelope"></a>
                    <a href="#" className="fas fa-phone"></a>
                    <img src={Picture_4} alt="picture_4"/>
                        <h3>Molnár Eszter</h3>
                        <span>Ügynök</span>
                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>
                </div>

            </div>

        </section>
    );
};

export default Agents;