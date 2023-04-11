import React from 'react';
import "../styles/footer.css";

const Footer = () => {
    return (
        <section className="footer">

            <div className="footer-container">

                <div className="box-container">

                    <div className="box">
                        <h3>Telephelyünk</h3>
                        <a href="#">India</a>
                        <a href="#">Amerika</a>
                        <a href="#">Franciaország</a>
                        <a href="#">Magyarország</a>
                        <a href="#">Japán</a>
                    </div>

                    <div className="box">
                        <h3>Gyors Linkek</h3>
                        <a href="#">Kezdőlap</a>
                        <a href="#">Szolgáltatások</a>
                        <a href="#">Kiemelt</a>
                        <a href="#">Ügynökök</a>
                        <a href="#">Elérhetőség</a>
                    </div>

                    <div className="box">
                        <h3>Extra Linkek</h3>
                        <a href="#">Fiókom</a>
                        <a href="#">Kedvenceim</a>
                        <a href="#">Listám</a>
                    </div>

                    <div className="box">
                        <h3>Közösségi média</h3>
                        <a href="#">Facebook</a>
                        <a href="#">Twitter</a>
                        <a href="#">Instagram</a>
                        <a href="#">LinkedIn</a>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default Footer;