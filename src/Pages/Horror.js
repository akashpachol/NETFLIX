import React from 'react'
import Banner from '../Component/Banner/Banner';
import Header from '../Component/Header/Header';
import Row from '../Component/Row/Row';
import requests from "../request";

function Horror() {
  return (
    <div>

<Header />
        <Banner />
         <Row title="COMEDY MOVIES" fetchURL={requests.fetchHorrorMovies} isLarge={true}  />
    </div>
  )
}

export default Horror