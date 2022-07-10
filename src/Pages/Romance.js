import React from 'react'
import Banner from '../Component/Banner/Banner';
import Header from '../Component/Header/Header';
import Row from '../Component/Row/Row';
import requests from "../request";

function Romance() {
  return (
    <div>
         <Header />
        <Banner />
         <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} isLarge={true}  />
    </div>
  )
}

export default Romance