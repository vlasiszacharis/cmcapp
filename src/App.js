import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      



    </Routes>
  );
}

export default App;
