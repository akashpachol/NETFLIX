import React,{useState,useContext} from 'react'
import { FirebaseContext } from '../../Store/Context'
import './Login.css'
import { useNavigate } from "react-router-dom";

function Login() {
    const Navigate=useNavigate()
     const{firebase}=useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password,setPassword]=useState('')
    const handleLogin=(e)=>{

        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          ()=>{
            Navigate('/')
          }
        ).catch((error)=>{
          alert(error.message)
        })
    }

  return (
    
    

<div className='main'>
        <div className="header">
          <div className='nav_logo'>
            <img style={{width:'150px'}}  src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix_logo" />
            
             </div>
            </div>
            <div className="input_body">
              <div className="input_box">
                <h2>Login in</h2>
                <form  onSubmit={handleLogin}>
             
                    <div className="input_rap">
                        <input type="text"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        placeholder='email or phone number' />
                    </div>
                    <div className="input_rap">
                        <input type="password"
                         value={password}
                         onChange={(e)=>setPassword(e.target.value)}
                        placeholder='password' />
                    </div>
                    <div className="input_rap">
                        <button onClick={handleLogin} >Login in</button>
                    </div>

                    <div className='data'>
  <h5>New To Netflix? <a href="/signup">Sign Up Now</a></h5>
                   <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">learn more</a></p>

</div>

                </form>
              </div>

            </div>
   

    </div>
  )
}

export default Login