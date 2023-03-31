import './App.css';

import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercicio react-redux (simples)</h1>
      <div className='linha'>
        <Intervalo title="Card 1" red>x</Intervalo>
      </div>
      <div className='linha'>
        <Card title="Card 2" green>x</Card>
        <Card title="Card 3" blue>y</Card>
        <Card title="Card 4" purple>y</Card>
      </div>
    </div>
  );
}

export default App;
