import logo from './logo.svg';
import './App.css';
import Topo from './componentes/Topo1';
import CorpoPagina from './componentes/CorpoPagina';
import Rodape from './componentes/Rodape';

function App() {
  return (
    <div className="App">
      <Topo />
      <CorpoPagina />
      <Rodape />
    </div>
  );
}

export default App;
