import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Container from 'react-bootstrap/Container';
import SetAlarm from './SetAlarm.js';

function App() {
  return (
    <div className="App">
      <Container>
        <Title />
        <SetAlarm />
      </Container>

    </div>
  );
}

export default App;


