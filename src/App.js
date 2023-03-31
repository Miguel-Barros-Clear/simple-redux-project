import './App.css';

import Card from './components/Card';
import Intervalo from './components/Intervalo';
import Soma from './components/Soma';
import Media from './components/Media';
import Sorteio from './components/Sorteio';

function App() {
  return (
    <div className="App">
      <h1>Exercicio react-redux (simples)</h1>
      <div className='linha'>
        <Intervalo title="Card 1" red>x</Intervalo>
      </div>
      <div className='linha'>
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );
}

export default App;
