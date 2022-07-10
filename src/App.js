
import './App.css'
import {BrowserRouter as Router,Routes,Route  } from "react-router-dom";
import Home from './Pages/Home';
import Comedy from './Pages/Comedy';
import Actionmovies from './Pages/Actionmovies';
import Document from './Pages/Document';
import Horror from "./Pages/Horror";
import Rated from "./Pages/Rated";
import Romance  from "./Pages/Romance";
import Signup from './Component/Signup/Signup';
import Login from './Component/Login/Login';
import { useContext,useEffect} from 'react';
import { AuthContext, FirebaseContext } from './Store/Context';


function App() {

const{setUser}=useContext(AuthContext)
const{firebase}=useContext(FirebaseContext)
useEffect(() => {
  firebase.auth().onAuthStateChanged((user)=>{
    console.log(user);
    setUser(user)
  })
}, [])


  return (
    <div className="App">

      
      <Router>
      <Routes>
      <Route exact path={'/'} element={<Home />} /> 
     <Route path='/comedy' element={<Comedy />} />
      <Route  path={'/actionmovies'} element={<Actionmovies />} /> 
      <Route  path={'/documentaries'} element={<Document />} /> 
      <Route  path={'/horrormovies'} element={<Horror />} /> 
      <Route  path={'/ratedmovies'} element={<Rated />} /> 
      <Route  path={'/romancemovies'} element={<Romance />} /> 
       <Route path={'/signup'} element={<Signup />} />
       <Route path={'/login'} element={<Login />} />
      </Routes>

      </Router>
     
    </div>
  );
}

export default App;
