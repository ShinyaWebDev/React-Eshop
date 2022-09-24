import './App.css';
import Home from './Home'
import Header from './Header'
import Checkout from './Checkout'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/React-Eshop' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/checkout' element={<Checkout />} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;