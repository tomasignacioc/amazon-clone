import React from 'react'
import "./Home.css"
import Product from './Product'

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/30/digital/video/magellan/country/spain/EvergreenRefresh/fromDec19/ES_Evergreen_Refresh_ENG_SADLP_Tablet_1453x363.jpg" alt="" />

                <div className="home__row">
                    <Product id={1} title="testing prod 1" price={20} image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating />
                    <Product id={2} title="testing prod 2" price={30} image="https://http2.mlstatic.com/D_NQ_NP_2X_866484-MLA46429803856_062021-F.webp" rating />
                </div>
                <div className="home__row">

                </div>
                <div className="home__row">

                </div>
            </div>
        </div>
    )
}

export default Home
