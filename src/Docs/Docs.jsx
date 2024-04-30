import Card from './Card';
import './Docs.css'
import { Navigate } from 'react-router-dom';
const Docs = () => {
  const handleExitButtonClick = () => {
		window.location.href = '/';
	};
  const x=localStorage.getItem("User");
  if (!x) {
    return <Navigate to="/login" />;
  }

  return (
    <>
    <h1 className='Heading'>Developers Docs</h1>
    <button className='Exit'
			onClick={handleExitButtonClick}
			>X</button>
      <div className='Box'>
        <h1>MongoDb</h1>
        <Card
          title="Mongo Doc"
          content="MongoDB is a NoSQL, document-oriented database designed for flexibility and scalability. It stores data in BSON (Binary JSON) format, using collections and documents instead of tables and rows. MongoDB supports dynamic schemas, making it adaptable to evolving data structures. Its horizontal scaling and high-performance querying make it suitable for MERN stack applications, handling data storage and retrieval efficiently."
          link="https://www.mongodb.com/docs/"
        />
      </div>
      <div className='Box'>
        <h1>Express js</h1>
        <Card
          title="Express Doc"
          content="Express.js is a web application framework for Node.js, providing a robust set of features for building web and mobile applications. It simplifies server-side development by offering a minimalistic, unopinionated structure. Express.js handles routing, middleware, and HTTP requests, making it a crucial backend component in the MERN stack. Its modular architecture allows developers to seamlessly integrate additional libraries and modules to extend functionality."
          link="https://expressjs.com/en/5x/api.html"
        />
      </div>
      <div className='Box'>
        <h1>Babel </h1>
        <Card
          title="Babel Docs"
          content="Babel is a JavaScript compiler that allows developers to use the latest ECMAScript features in their code, ensuring compatibility with older browsers. In the MERN stack, Babel is often employed to transpile React code and other modern JavaScript features into a format supported across various browsers. This enables developers to leverage the latest language features while maintaining broad compatibility."
          link="https://babeljs.io/docs/usage"
        />
      </div>
      <div className='Box'>
        <h1>Axios</h1>
        <Card
          title="Axios Doc"
          content="Axios is a popular JavaScript library for making HTTP requests. In the MERN stack, Axios is often employed on the frontend (with React) to interact with APIs and communicate with the backend server. Its promise-based API simplifies asynchronous data fetching, error handling, and response parsing. Axios enhances the efficiency of frontend development by providing a concise and flexible way to handle HTTP requests."
          link="https://axios-http.com/docs/intro"
        />
      </div>
    </>

  );
};

export default Docs;
