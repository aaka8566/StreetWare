import './App.css';
import Footer from './Components/ProductComponents/HomeComponents/Footer';
import Navbar from './Components/ProductComponents/HomeComponents/Navbar';
import {AllRoutes} from "./Routes/AllRoutes.jsx"
function App() {
  return (
    <div className="App">     
     <Navbar/>
     <AllRoutes/>
     <Footer/>
    </div>
  );
}

export default App;
