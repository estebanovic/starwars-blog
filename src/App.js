import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import './App.css';
import NavBar from './components/NavBar';
import Characters from './views/Characters';
import Home from './views/Home';
import Planets from './views/Planets';
import Starships from './views/Starships';
import Error404 from './views/error/404';
import Footer from './components/Footer';
import ContextWrapper from './store/appContext';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/planets" component={Planets} />
          <Route exact path="/starships" component={Starships} />
          <Route component={Error404} />
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}

export default ContextWrapper(App);
