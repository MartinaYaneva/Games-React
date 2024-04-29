import CreateGame from "./components/CreateGame";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Register from "./components/Register";
import Login from "./components/Login";
import GameDetails from "./components/GameDetails";
import GameCatalog from "./components/GCatalog/GameCatalog";

import {Route, Switch} from 'react-router-dom'


function App() {

  return (
    <div id="box">
      <Header />
      <main id="main-content"> 
      <Switch>
      <Route path="/"  exact component ={WelcomeWorld} />
      <Route path="/games" exact component ={GameCatalog} />
      <Route path="/create-game" component ={CreateGame} />
      <Route path="/login" component ={Login} />
      <Route path="/register" component ={Register} />
      <Route path="/games/:gameId" component ={GameDetails} />
      </Switch>
      </main>

    </div>

  );
}

export default App;
