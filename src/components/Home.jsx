import React from 'react';
import "../styles/home.css";

const Home = () => {
    return (
        <section className="home" id="home">

            <form action="">

                <h3>Találja meg az Önnek való helyét!</h3>

                <div className="buttons-container">
                    <a href="#" className="btn">Bérlendő</a>
                    <a href="#" className="btn">Eladó</a>
                </div>

                <div className="inputBox">
                    <input type="search" name="" placeholder="Megye" id=""/>
                        <input type="search" name="" placeholder="Város" id=""/>
                            <select name="" id="">
                                <option value="" disabled hidden selected>Minimum ár</option>
                                <option value="500 000 Ft.">500 000 Ft.</option>
                                <option value="800 000 Ft.">800 000 Ft.</option>
                                <option value="1 000 000 Ft.">1 000 000 Ft.</option>
                                <option value="1 200 000 Ft.">1 200 000 Ft.</option>
                                <option value="1 400 000 Ft.">1 400 000 Ft.</option>
                            </select>
                            <select name="" id="">
                                <option value="" disabled hidden selected>Maximum ár</option>
                                <option value="3 000 000 Ft.">3 000 000 Ft.</option>
                                <option value="3 200 000 Ft.">3 200 000 Ft.</option>
                                <option value="3 400 000 Ft.">3 400 000 Ft.</option>
                                <option value="3 600 000 Ft.">3 600 000 Ft.</option>
                                <option value="3 800 000 Ft.">3 800 000 Ft.</option>
                            </select>
                            <select name="" id="">
                                <option value="" disabled hidden selected>Ingatlan állapota</option>
                                <option value="Ready To Move">Azonnal költözhető</option>
                                <option value="under construction">Építkezés alatt</option>
                                <option value="furnished">Bútorozott</option>
                                <option value="semi-furnished">Félig bútorozott</option>
                                <option value="unfurnished">Nem bútorozott</option>
                            </select>
                            <select name="" id="">
                                <option value="" disabled hidden selected>Ingatlantípus</option>
                                <option value="flat">Lakás</option>
                                <option value="house">Ház</option>
                                <option value="shop">Bolt</option>
                                <option value="warehouse">Raktár</option>
                                <option value="land">Föld</option>
                            </select>
                            <select name="" id="">
                                <option value="" disabled hidden selected>Kényelmi szolgáltatások</option>
                                <option value="parking space">Parkoló hely</option>
                                <option value="swimming pool">Úszómedence</option>
                                <option value="playground">Játszótér</option>
                                <option value="security">Biztonság</option>
                                <option value="all">Minden</option>
                            </select>
                            <select name="" id="">
                                <option value="" disabled hidden selected>Szobák</option>
                                <option value="1 bedroom">1 szoba</option>
                                <option value="2 bedroom">2 szoba</option>
                                <option value="3 bedroom">3 szoba</option>
                                <option value="4 bedroom">4 szoba</option>
                                <option value="5 bedroom">5 szoba</option>
                            </select>
                            <select name="" id="">
                                <option value="" disabled hidden selected>Fürdőszobák</option>
                                <option value="1 bathroom">1 fürdőszoba</option>
                                <option value="2 bathroom">2 fürdőszoba</option>
                                <option value="3 bathroom">3 fürdőszoba</option>
                                <option value="4 bathroom">4 fürdőszoba</option>
                                <option value="5 bathroom">5 fürdőszoba</option>
                            </select>
                </div>

                <input type="submit" value="Keresés" className="btn"/>

            </form>

        </section>

);
};

export default Home;