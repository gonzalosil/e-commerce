import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemsList/ItemList';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemList/>
      <ItemListContainer greeting = "Productos"/>
    </div>
  );
}

export default App;
