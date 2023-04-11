import React from 'react';
import "../styles/services.css";
import S_1 from "../images/s-1.png";
import S_2 from "../images/s-2.png";
import S_3 from "../images/s-3.png";

const Services = () => {
    return (
        <section className="services" id="services">

            <h1 className="heading"> <span>Szolgáltatásaink</span> </h1>

            <div className="box-container">

                <div className="box">
                    <img src={S_1} alt="s_1"/>
                        <h3>Ház Vásárlása</h3>
                        <p>A ház vásárlás menete egy alapos megfontolást igénylő és jelentős kiadásokkal járó folyamat – legtöbbünk számára
                            az egyik legkomolyabb jogügylet, amelybe valaha belevágunk. Hosszú évekre meg fogja határozni nemcsak mindennapjainkat,
                            de anyagi lehetőségeinket is. </p>
                        <a href="#" className="btn">Tudjon meg többet</a>
                </div>

                <div className="box">
                    <img src={S_2} alt="s_2"/>
                        <h3>Ház Bérlése</h3>
                        <p>A ház bérlése menete egy alapos megfontolást igénylő és jelentős kiadásokkal járó folyamat – legtöbbünk
                            számára az egyik legkomolyabb jogügylet</p>
                        <a href="#" className="btn">Tudjon meg többet</a>
                </div>

                <div className="box">
                    <img src={S_3} alt="s_3"/>
                        <h3>Ház Eladása</h3>
                        <p>Ingatlant eladni még egy erős keresleti piacon sem könnyű. Habár sok a potenciális vevő,
                            nagy tömegben elérni őket igazán csak egy országos ingatlanközvetítő hálózattal lehetséges, ahol a
                            nagy vevőkőr számára az értékesítők az igényeknek megfelelő ingatlanokat rendszeresen kiajánlják.</p>
                        <a href="#" className="btn">Tudjon meg többet</a>
                </div>

            </div>

        </section>
    );
};

export default Services;