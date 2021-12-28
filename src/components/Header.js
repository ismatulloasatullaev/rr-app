import React from 'react'
import './Header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from '../images/tt.jpeg'
import Home from './Home.js'
import Course from './Course.js'
import About from './About.js'
import Team from './Team.js'


const styles = {
  pTop: {
    paddingTop: '2rem'
  },
}

function Header() {
  return (
     <Router>
        <div style={styles.pTop} className="container">
        <nav className="nav">
        <div className="logo"><Link className="list__link" to="/">
            <img className="logo" src={ logo } />
          </Link></div>
        <ul className="nav__list">
          <li className="list__item">
          <Link className="list__link" to="/">Home</Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to="/course"> Kurslar </Link>
          </li>
          <li className="list__item">
            <Link className="list__link" to='/about'> Biz haqimizda </Link> 
          </li>
          <li className="list__item">
            <Link className="list__link" to="/team"> Jamoa </Link> 
          </li>
          <li>
            <a href="" className="nav__icon">telegram</a>
          </li>
          <li>
            <a href="" className="nav__icon">instagram</a>
          </li>
          <li>
            <a href="" className="nav__icon">twitter</a>
          </li> 
        </ul>
      </nav>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>  
        <Route exact path="/about"> 
          <About />
        </Route>
        <Route exact path="/course"> 
          <Course />
        </Route>
        <Route exact path="/team"> 
          <Team />
        </Route>
      </Switch>

     </Router>

  );
}





export default Header;
