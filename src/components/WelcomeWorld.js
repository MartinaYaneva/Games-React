import * as gameService from '../services/gameService'
import { useState, useEffect } from 'react';
import LatestGameCard from './LatestGameCard';


export default function WelcomeWorld(){
const [games, setGames]= useState([])

useEffect(() => {
  gameService.getLatest()
  .then(res => {
    setGames(res)
  })

}, [])

    return(
        <section id="welcome-world">

        <div className="welcome-message">
          <h2>All new games are</h2>
          <h3>Only in GamesPlay</h3>
        </div>
        <img src="/images/solder.png" alt="hero" />

        <div id="home-page">
          <h1>Latest Games</h1>
          {
            games.length > 0
            ? games.map(x => <LatestGameCard key= {x._id} game={x} />)
            : <p className="no-articles">No games yet</p>
          }
          
        </div>
      </section>
    );
}