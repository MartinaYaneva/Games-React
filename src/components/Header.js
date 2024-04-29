import {NavLink } from 'react-router-dom'
import './Header.css'

export default function Header(){
    return(
<header>
        <h1><NavLink className="home" to="/">GamesPlay</NavLink></h1>
        <nav>
          <NavLink activeClassName='active-links' to="/games">All games</NavLink >
          <div id="user">
            <NavLink activeClassName='active-links' to="/create-game">Create Game</NavLink >
            <NavLink activeClassName='active-links'  to="/logout">Logout</NavLink>
          </div>
          <div id="guest">
            <NavLink activeClassName='active-links'  to="/login">Login</NavLink >
            <NavLink activeClassName='active-links' to="/register">Register</NavLink>  
          </div>
        </nav>
      </header>
    )
}

