import { Link,BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Quiz from './Quiz/Quiz';
import Docs from './Docs/Docs';
import App from './App/App';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Codepen from './Codepen/Codepen';
import './Home.css';

const Home = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/sign-in" element={<SignUp/>} />
        <Route path="/" element={<HomeContent/>} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/video-call" element={<App/>} />
        <Route path="/code-pen" element={<Codepen/>} />
      </Routes>
    </Router>
  );
}
const HomeContent = () => {
  const headingStyle = {
    color: 'white',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
  };
  const x=localStorage.getItem("User");
  const handleExitButtonClick = () => {
		window.location.href = '/login';
    localStorage.removeItem("User");
	};
  if (!x) {
    return <Navigate to="/login" />;
  }

  return (<>
    <div className="home-container" style={{display:''}}>
      <button className='logout'  onClick={handleExitButtonClick}>Log Out</button>
    <h1 className='Heading1'>Welcome to DevEngage</h1>
    <div className="card1">
      <h2 style={headingStyle} >Video Call</h2>
      <p>Connect with others through video calls and meetings.</p>
      <Link to="/video-call">
        <button className='button1'><span className='button-content'>Join Video Call</span></button>
      </Link>
    </div>
    <div className="card1">
      <h2 style={headingStyle} >Quiz</h2>
      <p>Test your knowledge with our interactive quizzes.</p>
      <Link to="/quiz">
        <button className='button1'><span className='button-content'>Start Quiz</span></button>
      </Link>
    </div>
    <div className="card1">
      <h2 className='headings' style={headingStyle} >Docs</h2>
      <p className='paras'>Explore our documentation for in-depth information.</p>
      <Link to="/docs" className='links'>
        <button className='button1'><span className='button-content'>Read Docs</span></button>
      </Link>
    </div>
    <div className="card1">
      <h2 className='headings' style={headingStyle} >CodePen</h2>
      <p className='paras'>Explore our Code pen compiler for practice</p>
      <Link to="/code-pen" className='links'>
        <button className='button1'><span className='button-content'>Code Pen</span></button>
      </Link>
    </div>
  </div>
  </>
  );
};

export default Home

