import {Link} from 'react-router-dom'
import React from 'react'

// const ratingCalculator = React.lazy(() =>
// import ('../../utils/ratingCalculator'))


export default function GameCard({game}){
    return(
        <div className="allGames">
        <div className="allGames-info">
            <img src={game.imageUrl} />
            <h6>{game.category}</h6>
            <h2>{game.title}</h2>
                <Link to={`/games/${game._id}`}
                    className="details-button">
                    Details
                </Link>
            </div>
    </div>
    )
}