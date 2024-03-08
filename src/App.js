import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import  { NavBar }  from "./components/NavBar";
import  { Banner }  from "./components/Banner";
import  { Habilidades }  from './components/Habilidades';
import { Projetos } from  "./components/Projetos"
import { Contato } from "./components/Contato"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner />
        <Habilidades />
        <Projetos /> 
        <Contato />
        <Footer />
    </div>
  );
}

export default App;
