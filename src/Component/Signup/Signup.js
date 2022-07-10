import React,{useState,useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { FirebaseContext } from '../../Store/Context';
import "./signup.css";
function Signup() {

  const [email, setEmail] = useState('')
  const [password,setPassword]=useState('')
  const [username,setUsername]=useState('')
  const {firebase}=useContext(FirebaseContext)
    const Navigate=useNavigate()
    const handleSubmit=(e)=>{
      e.preventDefault()
      firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result)=>{
     result.user.updateProfile({displayName:username}).then(()=>{
      firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        email
      }).then(()=>{
  Navigate("/login")
      })
     })
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
                <h2>Sign up</h2>
                <form  onSubmit={handleSubmit}>
                <div className="input_rap">
                        <input type="text"
                        value={username}
                        onChange={(e)=>setUsername(e.target.value)}
                        placeholder='email or phone number' />
                    </div>
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
                        <button onClick={handleSubmit}  >Sign up</button>
                    </div>

                    <div className='data'>
  <h4>New To Netflix? <a href="/login">Login Now</a></h4>
                   <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="">learn more</a></p>

</div>

                </form>
              </div>

            </div>
   
  </div>

  )
}

export default Signup