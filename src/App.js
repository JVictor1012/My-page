import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import  { NavBar }  from "./components/NavBar";
import  { Banner }  from "./components/Banner";
import  { Habilidades }  from "./components/Habilidades";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner />
        <Habilidades />
    </div>
  );
}

export default App;
