import React from 'react'
import Banner from '../Component/Banner/Banner';
import Header from '../Component/Header/Header';
import Row from '../Component/Row/Row';
import requests from "../request";

function Document() {
  return (
    <div>

<Header />
        <Banner />
         <Row title="DOCUMENTARIES MOVIES" fetchURL={requests.fetchDocumentaries} isLarge={true}  />
    </div>
  )
}

export default Document