import logo from './logo.svg';
import './App.css';
import ControlledForm from './components/ControlledComponent';
import UncontrolledForm from './components/UncontrolledComponent';
import DataFetchComponent from './components/DataFetchComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <ControlledForm/>
       <br/>
       <UncontrolledForm/>
       <DataFetchComponent/>
      </header>
    </div>
  );
}

export default App;
