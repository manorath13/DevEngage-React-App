import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import { Link} from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Account Created");
        window.location.href="/login"
        console.log(userCredential);
      })
      .catch((error) => {
        alert("Error creating account");
        console.log(error);
      });
  };

  return (
    <div className="sign-in-container m-5 border solid p-5 shadow rounded">
    <form onSubmit={signUp} className="mt-5 p-5">
      <h1 style={{ color: '#333', textAlign: 'center' }} className="lead">Sign In to your Account</h1>
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
      <button type="submit" className='button1'><span className='button-content p-2'>Sign In</span></button>
      <Link to="/login">Login</Link>
    </form>
  </div>
  );
};

export default SignUp;