import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants"
import MyFavorites from "./components/MyFavorites"
import RestaurantList from "./components/RestaurantList"
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
        <Route path="/my-favorites">
          <MyFavorites />
        </Route>
        <Route path="/add-restaurant">
          <RestaurantList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
