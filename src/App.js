import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home/Home';
import Footer from './components/pages/Footer/Footer';
import Products from './components/pages/Products/Products';
import Services from './components/pages/Services/Services';
import SignUp from './components/pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/products' component={Products}/>
        <Route path='/services' component={Services}/>
        <Route path='/signup' component={SignUp}/>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
