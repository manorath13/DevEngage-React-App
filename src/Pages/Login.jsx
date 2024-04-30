import { signInWithEmailAndPassword } from "firebase/auth";
import  { useState } from "react";
import { auth } from "../firebase";
import './Login.css'
import { Link} from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Successful");
        window.location.href="/";
        console.log(userCredential);
        localStorage.setItem("User",JSON.stringify(userCredential.user));
      })
      .catch((error) => {
        alert("Login UnSuccessful");
        console.log(error);
      });
  };

  return (<>
    <div className="sign-in-container m-5 border solid p-5 shadow rounded">
      <form onSubmit={signIn} className="mt-5 p-5">
        <h1 style={{ color: '#333', textAlign: 'center' }} className="lead">Log In to your Account</h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          style={{ display: 'block', marginBottom: '10px', marginTop: '50px', color: 'black' }}
          onChange={(e) => setEmail(e.target.value)}
        className="mb-3 rounded p-2"></input>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          style={{ display: 'block', marginBottom: '10px', color:'black'}}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-3 rounded p-2"></input>
        <button type="submit" className='button1'><span className='button-content p-2'>Log In</span></button>
        <Link to="/sign-in">Create Account</Link>
      </form>
    </div>
    
    </>
  );
};

export default Login;