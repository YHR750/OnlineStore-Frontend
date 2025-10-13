import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './components/home';
import './index.css';
import Login from './components/login';

function App() {
  return (
    <div className='App'>
        <Router>
          <Routes>
            <Route path ="/" element = {<Home/>}/>
            
            <Router path='/login' element={Login}></Router>
          </Routes>
        </Router>
    </div>
  )
}

export default App