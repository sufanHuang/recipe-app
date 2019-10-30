import React, { Component } from 'react';
import './App.css';
import config from './config'

import Form from "./components/Form";
import Recipes from "./components/Recipes";

const { API_KEY } = config;

class App extends Component {
  state = {
    recipes: []
  }

  getRecipe = async (event) => {
    const recipeName = event.target.elements.recipeName.value;
    event.preventDefault();
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const results = await fetch(`${proxy}http://food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=9`);

    const data = await results.json();
    this.setState({ recipes: data.recipes });
    console.log(this.state.recipes);
  }

 getPopularRecipe = async ()=>{
     const proxy = 'https://cors-anywhere.herokuapp.com/'
     const results = await fetch(`${proxy}http://food2fork.com/api/search?key=${API_KEY}&count=9`);
     const data = await results.json();
     this.setState({ recipes: data.recipes });

 }
 componentDidMount=()=>{
   this.getPopularRecipe()
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search</h1>
            <h3 className="App-title text-info">Search with Your Favorite Ingredient</h3>

        </header>
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
