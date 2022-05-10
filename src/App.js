import React from "react";
import Inputtag from "./Component/Inputtag";
import MovieCard from "./MovieCard/MovieCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("app.js - constructor");
    this.onQueryChange = this.onQueryChange.bind(this);
    this.state = {
      movieQuery: "",
    };
  }

  onQueryChange(movieQuery) {
    console.log("app.js - onQueryChange");
    //alert(movieQuery);
    this.setState({ movieQuery });
  }

  render() {
    console.log("app.js - render");
    const movieQuery = this.state.movieQuery;
    return (
      <div>
        <Inputtag onQueryChange={this.onQueryChange} />
        <MovieCard movieQuery={movieQuery} onQueryChange={this.onQueryChange} />
      </div>
    );
  }
}

export default App;
