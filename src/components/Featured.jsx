import React from 'react';
import "../styles/featured.css";
import Img_1 from "../images/img-1.jpg";
import Img_2 from "../images/img-2.jpg";
import Img_3 from "../images/img-3.jpg";
import Img_4 from "../images/img-4.jpg";
import Img_5 from "../images/img-5.jpg";
import Img_6 from "../images/img-6.jpg";

const Featured = () => {
    return (
        <section className="featured" id="featured">

            <h1 className="heading"><span>Kiemelt</span> Ingatlanok </h1>

            <div className="box-container">

                <div className="box">
                    <div className="image-container">
                        <img src={Img_1} alt="img_1"/>
                            <div className="info">
                                <h3>3 Nappal ezelőtt</h3>
                                <h3>Bérlendő</h3>
                            </div>
                            <div className="icons">
                                <a href="#" className="fas fa-film"><h3>1</h3></a>
                                <a href="#" className="fas fa-camera"><h3>4</h3></a>
                            </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>120 000 Ft./hónap</h3>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-envelope"></a>
                            <a href="#" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Szegedi lakás</h3>
                            <p>6700 Szeged, Szeges utca 15/4</p>
                        </div>
                        <div className="details">
                            <h3><i className="fas fa-expand"></i> 90 m<sup>2</sup>  </h3>
                            <h3><i className="fas fa-bed"></i> 3 Szoba </h3>
                            <h3><i className="fas fa-bath"></i> 2 Fűrdőszoba </h3>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btn">Információ lekérése</a>
                            <a href="#" className="btn">Részletek megnézése</a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image-container">
                        <img src={Img_2} alt="img_2"/>
                            <div className="info">
                                <h3>6 Nappal ezelőtt</h3>
                                <h3>Eladó</h3>
                            </div>
                            <div className="icons">
                                <a href="#" className="fas fa-film"><h3>2</h3></a>
                                <a href="#" className="fas fa-camera"><h3>7</h3></a>
                            </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>2 699 000 Ft.</h3>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-envelope"></a>
                            <a href="#" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Nyíregyházi lakás</h3>
                            <p>4400 Nyíregyháza, Árok utca 14</p>
                        </div>
                        <div className="details">
                            <h3><i className="fas fa-expand"></i> 120 m<sup>2</sup> </h3>
                            <h3><i className="fas fa-bed"></i> 5 Szoba </h3>
                            <h3><i className="fas fa-bath"></i> 3 Fűrdőszoba </h3>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btn">Információ lekérése</a>
                            <a href="#" className="btn">Részletek megnézése</a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image-container">
                        <img src={Img_3} alt="img_3"/>
                            <div className="info">
                                <h3>1 Nappal ezelőtt</h3>
                                <h3>Bérlendő</h3>
                            </div>
                            <div className="icons">
                                <a href="#" className="fas fa-film"><h3>1</h3></a>
                                <a href="#" className="fas fa-camera"><h3>6</h3></a>
                            </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>80 000 Ft./hónap</h3>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-envelope"></a>
                            <a href="#" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Budapesti lakás</h3>
                            <p>1011 Budapest, Petőfi Sándor utca 2.</p>
                        </div>
                        <div className="details">
                            <h3><i className="fas fa-expand"></i> 60 m<sup>2</sup> </h3>
                            <h3><i className="fas fa-bed"></i> 1 Szoba </h3>
                            <h3><i className="fas fa-bath"></i> 1 Fűrdőszoba </h3>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btn">Információ lekérése</a>
                            <a href="#" className="btn">Részletek megnézése</a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image-container">
                        <img src={Img_4} alt="img_4"/>
                            <div className="info">
                                <h3>9 Nappal ezelőtt</h3>
                                <h3>Bérlendő</h3>
                            </div>
                            <div className="icons">
                                <a href="#" className="fas fa-film"><h3>2</h3></a>
                                <a href="#" className="fas fa-camera"><h3>6</h3></a>
                            </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>100 000 Ft./hónap</h3>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-envelope"></a>
                            <a href="#" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Debreceni lakás</h3>
                            <p>4000 Debrecen, Szarvas utca 15.</p>
                        </div>
                        <div className="details">
                            <h3><i className="fas fa-expand"></i> 50 m<sup>2</sup> </h3>
                            <h3><i className="fas fa-bed"></i> 2 Szoba </h3>
                            <h3><i className="fas fa-bath"></i> 2 Fűrdőszoba </h3>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btn">Információ lekérése</a>
                            <a href="#" className="btn">Részletek megnézése</a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image-container">
                        <img src={Img_5} alt="img_5"/>
                            <div className="info">
                                <h3>10 Nappal ezelőtt</h3>
                                <h3>Eladó</h3>
                            </div>
                            <div className="icons">
                                <a href="#" className="fas fa-film"><h3>3</h3></a>
                                <a href="#" className="fas fa-camera"><h3>8</h3></a>
                            </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>1 999 000 Ft.</h3>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-envelope"></a>
                            <a href="#" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Zamárdi lakás</h3>
                            <p>8621 Zamárdi, János Vitéz utca 1.</p>
                        </div>
                        <div className="details">
                            <h3><i className="fas fa-expand"></i> 70 m<sup>2</sup> </h3>
                            <h3><i className="fas fa-bed"></i> 4 Szoba </h3>
                            <h3><i className="fas fa-bath"></i> 2 Fűrdőszoba </h3>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btn">Információ lekérése</a>
                            <a href="#" className="btn">Részletek megnézése</a>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <div className="image-container">
                        <img src={Img_6} alt="img_6"/>
                            <div className="info">
                                <h3>3 Nappal ezelőtt</h3>
                                <h3>Eladó</h3>
                            </div>
                            <div className="icons">
                                <a href="#" className="fas fa-film"><h3>1</h3></a>
                                <a href="#" className="fas fa-camera"><h3>4</h3></a>
                            </div>
                    </div>
                    <div className="content">
                        <div className="price">
                            <h3>2 899 000 Ft.</h3>
                            <a href="#" className="fas fa-heart"></a>
                            <a href="#" className="fas fa-envelope"></a>
                            <a href="#" className="fas fa-phone"></a>
                        </div>
                        <div className="location">
                            <h3>Győri lakás</h3>
                            <p>9000 Győr, Arany utca 15/7</p>
                        </div>
                        <div className="details">
                            <h3><i className="fas fa-expand"></i> 140 m<sup>2</sup> </h3>
                            <h3><i className="fas fa-bed"></i> 3 Szoba </h3>
                            <h3><i className="fas fa-bath"></i> 1 Fűrdőszoba </h3>
                        </div>
                        <div className="buttons">
                            <a href="#" className="btn">Információ lekérése</a>
                            <a href="#" className="btn">Részletek megnézése</a>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Featured;