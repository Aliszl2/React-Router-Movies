import React, { useState } from "react";

import { Route, Switch } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from "./Movies/SavedList";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  const handleDelete = id => {
    console.log(id);
    setSavedList(savedList.filter(movie => movie.id !== id));
  };

  return (
    <div className="main-container">
      <SavedList list={savedList} handleDelete={handleDelete} />
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route
          exact
          path="/movies/:id"
          render={props => <Movie {...props} addToSavedList={addToSavedList} />}
        />
        >
      </Switch>
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
