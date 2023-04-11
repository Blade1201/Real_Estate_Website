import React from 'react';
import "../styles/contact.css";
import Icon_1 from "../images/icon-1.png";
import Icon_2 from "../images/icon-2.png";
import Icon_3 from "../images/icon-3.png";

const Contact = () => {
    return (
        <section className="contact" id="contact">

            <h1 className="heading"><span>Elérhetőségeink</span> </h1>

            <div className="icons-container">

                <div className="icons">
                    <img src={Icon_1} alt="icon_1"/>
                        <h3>Telefonszám</h3>
                        <p>+123-456-7890</p>
                        <p>+111-222-3333</p>
                </div>

                <div className="icons">
                    <img src={Icon_2} alt="icon_2"/>
                        <h3>Email</h3>
                        <p>real_agency@gmail.com</p>
                        <p>molnar_ildiko@gmail.com</p>
                </div>

                <div className="icons">
                    <img src={Icon_3} alt="icon_3"/>
                        <h3>Címünk</h3>
                        <p>4400 Nyíregyháza, Városmajor utca 4.</p>
                </div>

            </div>

            <div className="row">

                <form action="">
                    <div className="inputBox">
                        <input type="text" placeholder="Név"/>
                            <input type="number" placeholder="Szám"/>
                    </div>
                    <div className="inputBox">
                        <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Tárgy"/>
                    </div>
                    <textarea name="" placeholder="Üzenet" id="" cols="30" rows="10"></textarea>
                    <input type="submit" value="Üzenet küldése" className="btn"/>
                </form>

                <iframe className="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7341.119569225332!2d21.713473170207067!3d47.96479057476852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47389f99abe4bca3%3A0x254adbc5b47a49a4!2sNy%C3%ADregyh%C3%A1za%2C%20Epreskert%20u.%2064%2C%204400%20Magyarorsz%C3%A1g!5e0!3m2!1shu!2sua!4v1681255780896!5m2!1shu!2sua"
                        allowFullScreen="" loading="lazy"></iframe>

            </div>

        </section>
    );
};

export default Contact;