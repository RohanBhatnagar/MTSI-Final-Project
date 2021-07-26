import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Container from 'react-bootstrap/Container';
import SetAlarm from './SetAlarm.js';
import Footer from './Footer.js';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Title />
        <SetAlarm />
        <Footer />
      </div>



    </div>
  );
}

export default App;


