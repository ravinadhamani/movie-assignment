import React, { Component, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
export default class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      moviesResponse: {},
    };
  }
  componentDidMount() {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((res) => {
        const moviesResponse = res.data;
        this.setState({
          moviesResponse,
        });
      });
  }
  render() {
    return (
      <div className={styles.CardDiv}>
        {this.state.moviesResponse?.results?.map((movie) => (
          <div className={styles.SubCardDiv}>
            <img
              className={styles.imgTag}
              src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
              alt={movie.original_title}
            />
            <p className={styles.movieTitle}>{movie.title}</p>
          </div>
        ))}
      </div>
    );
  }
}
