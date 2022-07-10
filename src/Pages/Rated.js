import React from 'react'
import Banner from '../Component/Banner/Banner';
import Header from '../Component/Header/Header';
import Row from '../Component/Row/Row';
import requests from "../request";

function Rated() {
  return (
    <div>

<Header />
        <Banner />
         <Row title="RATED MOVIES" fetchURL={requests.fetchTopRated} isLarge={true}  />
    </div>
  )
}

export default Rated