import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/Home';
import Explore from './Components/Explore';
import Navigation from './Components/Navigation';
import DrinkPage from './Components/DrinkPage';
import PageNotFound from './Components/PageNotFound';

const App = () => {
  
  return (
    <BrowserRouter>
      <div>
        <Navigation/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/explorer' component={Explore} />
          <Route path='/drinkpage/:name' component={DrinkPage}/>
          <Route path='/' component={PageNotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
