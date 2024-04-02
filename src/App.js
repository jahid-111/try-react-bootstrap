
import './App.css';
import { Button, Spinner, } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <button>Default Button</button>
      <Button variant='info text-white'> React Button </Button>
      <Spinner variant='danger'></Spinner>
    </div>
  );
}

export default App;
