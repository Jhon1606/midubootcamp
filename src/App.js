import logo from './logo.svg';
import './App.css';
import Mensaje from './Mensaje';

function App() {
  const hola = 'Hola'
  return (
    <div className="App">
      {hola}
      <Mensaje color='red' message="Hola mundo" />
      <Mensaje color='yellow' message="desde módulo" />
    </div>
  );
}

export default App;
