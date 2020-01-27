import React from 'react';
// , { useState }
import { Route, Switch} from 'react-router-dom';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

// import SavedList from './Movies/SavedList';

const App = () => {
  // const [savedList, setSavedList] = useState( [] );

  // const addToSavedList = movie => {
  //   setSavedList( [...savedList, movie] );
  // };

  return (
    <div>
      {/* <SavedList list={savedList} /> */}
      <Switch>  
<Route exact path = "/">
  <MovieList/>
</Route>
<Route path = "/movie/:id">
  <Movie/>
</Route>
      </Switch>
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
