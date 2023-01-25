import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Navbar from './components/Navbar';
import Landing from './Pages/Landing';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';

import Dashboard from './Pages/Dashboard/Dashboard';
import Expenses from './Pages/Dashboard/Expenses'
import Income from './Pages/Dashboard/Income'
import Profile from './Pages/Dashboard/Profile'
import Reports from './Pages/Dashboard/Reports'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={< Landing />}/>
          <Route path='/about' element={< About />}/>
          <Route path='/contact' element={<Contact />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/login' element={<Login />} />
          
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Expenses' element={<Expenses/>}/>
          <Route path='/Income' element={<Income/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route path='/Reports' element={<Reports/>}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
