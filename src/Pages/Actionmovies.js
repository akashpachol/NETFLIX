import React from 'react'
import Banner from '../Component/Banner/Banner'
import Header from '../Component/Header/Header'
import Row from '../Component/Row/Row';
import requests from '../request';

function Actionmovies() {
  return (
    <div >
        <Header />
        <Banner />
        <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} isLarge={true} />


    </div>
  )
}

export default Actionmovies