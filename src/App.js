import React from "react";
import "./App.css";
import { ListOfGifs } from "./components/listOfGifs/ListOfGifs";
import { Link, Route } from 'wouter'
import { Home } from "./pages/home/Home";
import { Detail } from "./pages/detail/Detail";
import { SearchResults } from "./pages/searchResults/SearchResults";


export function App() {

  return (
    <div className="App">
      <section className="App-content">

        <Link
          to="/"
          className='link'
        >Home</Link>

        <Route 
          component={Home}
          path="/"
        />

        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />

        <Route 
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}
