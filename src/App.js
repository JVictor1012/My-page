import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import  { NavBar }  from "./components/NavBar";
import  { Banner }  from "./components/Banner";
import  { Habilidades }  from './components/Habilidades';
import { Projetos } from  "./components/Projetos"

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner />
        <Habilidades />
        <Projetos />
    </div>
  );
}

export default App;
