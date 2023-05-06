import './App.css';
import { SingleCard } from './Components/ProductComponents/HomeComponents/SingleCard';
import {Slider1}  from './Components/ProductComponents/HomeComponents/Slider';
import { Home } from './Pages/HomePage/Home';
import {AllRoutes} from "./Routes/AllRoutes.jsx"
function App() {
  return (
    <div className="App">
     <AllRoutes/>
    {/* <Home/> */}
    </div>
  );
}

export default App;
