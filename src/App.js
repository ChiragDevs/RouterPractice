import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Planets from './components/Planets';
import Films from './components/Films';
import Species from './components/Species';
import Starships from './components/Starships';
import People from './components/People';
import Vehicles from './components/Vehicles';
import FilmDetails from './components/Filmdetails';
import PeopleDetails from './components/Peopledetails';
import PlanetDetails from './components/Planetdetails';
import StarshipDetails from './components/Starshipdetails';
import VehicleDetails from './components/Vehicledetails';
import SpecyDetails from './components/Specydetails';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <div className="nav-container">
          <Nav />
        </div>
        <Switch >
          <Route exact path="/films" component={Films}/>
          <Route exact path="/people" component={People}/>
          <Route exact path="/planets" component={Planets}/>
          <Route exact path="/species" component={Species}/>
          <Route exact path="/starships" component={Starships}/>
          <Route exact path="/vehicles" component={Vehicles}/>

          <Route  path="/films/:id" component={FilmDetails}/>
          <Route  path="/people/:id" component={PeopleDetails}/>
          <Route  path="/planets/:id" component={PlanetDetails}/>
          <Route  path="/species/:id" component={SpecyDetails}/>
          <Route  path="/starships/:id" component={StarshipDetails}/>
          <Route  path="/vehicles/:id" component={VehicleDetails}/>

        </Switch>
      </div>
    </Router>
  );
}

export default App;

//<Planets />
/*
<Films />
<People />
      <Planets />
      <Species />
      <Starships />
      <Vehicles />


const [trial, setTrials] = useState();

  useEffect(() => {
    axios.get("https://swapi.dev/api")
        .then( response => {
            console.log(response);
        })
    },[])      

<Route  path="/films/:id" component={FilmDetails}/>
*/