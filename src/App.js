import logo from './logo.svg';
import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';

function App() {
  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <div>
        <img src="{boleta&vesgo}" alt="cinturinha" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </div>
  );
}

export default App;
