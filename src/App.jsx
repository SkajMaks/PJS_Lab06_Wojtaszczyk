import './App.css';
import CContents from './components/CContents.jsx';
import { CFooter } from './components/CFooter.jsx';
import CHeader from './components/CHeader.jsx';

function App() {
  return (
    <div className="App">
      <CHeader aName="Jan" aFamily="Kowalski"/>
      <CContents />
      <CFooter weather="słoneczna" temp="25">
    <p>
        Niebo jest bezchmurne, wiatr słaby
    </p>
      </CFooter>
    </div>
  );
}


export default App;




