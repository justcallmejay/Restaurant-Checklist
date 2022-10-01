import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import MyFavorites from "./components/MyFavorites";
import NewRestaurant from "./components/NewRestaurant";
import Footer from "./components/Footer";
import './App.css';

const initialStateForm = {
  name: '',
  location: '',
  image: '',
  description: '',
  price: '',
  rating: '',
  ratingData: []
}

function App() {

const [restaurant, setRestaurant] = useState([])
const [myVisits, setMyVisits] = useState([])
const [addRestaurant, setAddRestaurant] = useState(initialStateForm)


useEffect(() => {
    fetch('http://localhost:4000/restaurants')
    .then(res => res.json())
    .then(restaurants => setRestaurant(restaurants))
}, [addRestaurant, myVisits])

function handleNewRestaurant(inputRestaurant) {
  setRestaurant(place => {
    return [...place, inputRestaurant]
  })
}

  return (
    <div className="App">
      <div id='show-bg'>
        <div id='content-wrap'>
      <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/restaurants">
          {/* {restaurant.map(food => */}
          <Restaurants restaurant={restaurant} setRestaurant={setRestaurant} myVisits={myVisits} setMyVisits={setMyVisits}/>
          {/* )} */}
        </Route>
        <Route path="/my-favorites">
          <MyFavorites myVisits={myVisits} setMyVisits={setMyVisits} />
        </Route>
        <Route path="/add-restaurant">
          <NewRestaurant handleNewRestaurant={handleNewRestaurant} addRestaurant={addRestaurant} setAddRestaurant={setAddRestaurant} initialStateForm={initialStateForm}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      
      </BrowserRouter>
      </div>
     </div>
      <Footer/>
    </div>
  
  );
}

export default App;
