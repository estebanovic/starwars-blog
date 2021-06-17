import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import Personajes from './views/Personajes';
import Home from './views/Home';
import Planets from './views/Planets';
import Starships from './views/Starships';
import Error404 from './views/error/404';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/personajes" component={Personajes} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/starships" component={Starships} />
          <Route component={Error404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
