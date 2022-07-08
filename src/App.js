import Row from "./Component/Row/Row";
import requests from "./request";
import './App.css'
import Banner from "./Component/Banner/Banner";
import Header from "./Component/Header/Header";



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
       <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals} isLarge={true} />
       <Row title="TRENDING NOW" fetchURL={requests.fetchTrending} />
       <Row title="ACTION MOVIES" fetchURL={requests.fetchActionMovies} />
       <Row title="COMEDY MOVIES" fetchURL={requests.fetchComedyMovies} />
       <Row title="ROMANCE MOVIES" fetchURL={requests.fetchRomanceMovies} />
       <Row title="HORROR MOVIES" fetchURL={requests.fetchHorrorMovies} />
       <Row title="RATED MOVIES" fetchURL={requests.fetchTopRated} />
       <Row title="DOCUMENTARIES " fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
