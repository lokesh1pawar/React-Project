import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'; 
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Header from './Header';
import Footer from './Footer';
import Abt from './pages/abt';
import LoginForm from './pages/LoginForm';
import Reg from './pages/Reg';
import Notfound from './pages/Notfound';
/* import about from './pages/about'; */
/* import gallery from './pages/gallery'; */
/* import contact from './pages/contact'; */


function App() {
  return (
   <div>
      <Router>
     <Header/>
    
  <Switch> 
  <Route exact path="/" component={Home} />
  
  <Route exact path="/abt.js" component={Abt} />
  <Route exact path="/LoginForm.js" component={LoginForm} />
  <Route exact path="/Reg.js" component={Reg} />
  <Route component={Notfound}/>
        
  
        {/* <Home/> */}
  {/* <Route exact path="/about" component={about} /> */}
  {/* <Route exact path="/gallery" component={gallery} />
  <Route exact path="/contact" component={contact} /> */}

  </Switch>
    
 <Footer/> 
 </Router>
    </div>
  );
}

export default App;