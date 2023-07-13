import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemsList/ItemList';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          
        </Routes>
        <ItemList/>
        <ItemListContainer greeting = "Productos"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
