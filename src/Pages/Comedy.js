import React from 'react'
import Banner from '../Component/Banner/Banner';
import Header from '../Component/Header/Header';
import Row from '../Component/Row/Row';
import requests from "../request";
function Comedy() {
  return (
    <div>
        <Header />
        <Banner />
         <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} isLarge={true}  />
    </div>
  )
}

export default Comedy