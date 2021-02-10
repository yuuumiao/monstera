import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"src="https://images-eu.ssl-images-amazon.com/images/G/08/digital/video/magellan/country/france/StarTrekLowerDecks/EVREF_JAN21_GWBleedingHero_FT_COVIDUPDATE_STLOD_S1_XSite_3000X1200_PV_fr-FR._CB661309315_.jpg" alt="banner: prime video watch now"/>
            <div className="home__row">
                <Product />
                <Product />

            </div>
            <div className="home__row">
                <Product />
                <Product />
                <Product />
            </div>

            <div className="home__row">
                <Product />
            </div>

            </div>
        </div>
    )
}

export default Home
