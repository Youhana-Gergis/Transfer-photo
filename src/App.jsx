import React from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Home from './pages/Home';
import Setting from './pages/Setting';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
const App = () => {

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/setting' exact Component={Setting}></Route>
          <Route path='/dashboard' exact Component={Dashboard}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
