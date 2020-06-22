import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Explore from './Components/Pages/Explore';
import Navigation from './Components/Navigation';
import DrinkInformation from './Components/Pages/DrinkInformation';
import PageNotFound from './Components/PageNotFound';

const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/explorer' component={Explore} />
          <Route path='/drinkpage/:name' component={DrinkInformation}/>
          <Route path='/' component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
