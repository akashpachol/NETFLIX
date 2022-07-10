import React,{useState,useContext,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext, FirebaseContext } from '../../Store/Context';
import './Header.css'


function Header() {
  const{firebase}=useContext(FirebaseContext)
  const{user}=useContext(AuthContext)
    const [show, setShow] = useState(false)
  const navigate=useNavigate()
    useEffect(() => {
          window.addEventListener('scroll',()=>{
            if(window.scrollY>100){
                setShow(true)
            } else{setShow(false)}
          })
        
          return () => {
            window.removeEventListener("scroll",()=>{})
          }
        }, [])
    


 return(
    <div className={`nav ${show && 'nav-black'}`}>
        <img className='nav_logo' onClick={()=>navigate('/')} src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix_logo" />
       
        <div className="nav_part">
         
         
        <a className='nav_link' href="/actionmovies">ACTION </a>
        <a className='nav_link' href="/comedy">COMEDY</a>
        <a className='nav_link' href="/documentaries">DOCUMENTARIES</a>
         <a className='nav_link' href="/horrormovies">HORROR </a>
        <a className='nav_link' href="/ratedmovies">RATED </a>
        <a className='nav_link' href="/romancemovies">ROMANCE </a>
        
        

        </div>

        <div className="loginPage">
          <a className='nav_link ' href='/login'>

          {user ? (
              `welcome ${user.displayName}`
            ) : (
              <a className='nav_link ' href='/login'
                style={{ cursor: "pointer" }}
                
              > Login
              </a>
            )}
            
            </a>


            <a className='nav_link ' href='/login'> {user && <a className='nav_link ' onClick={()=>{
          firebase.auth().signOut();
          
        }}>Logout</a>}

</a>
          
        </div>
        





        <img className='nav_avatar' src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png" alt="" />
    </div>
  )
}

export default Header


// 
  // 
    // 