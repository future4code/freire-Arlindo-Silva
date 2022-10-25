import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { MovieDetailsContainer } from "./styled";

import Header from "../../components/Header/Header";
import { useLocation, useParams } from "react-router-dom";
import { API_KEY, BASE_URL } from "../../constants/constants";
import axios from "axios";

const MovieDetailsPage = () => {
  const [moviesDetails, setMovieDetails] = useState();

  const pathParams = useParams();

  const getDetails = () => {
    const url = `${BASE_URL}movie/${pathParams.title}?api_key=${API_KEY}`;
    axios
      .get(url)
      .then((response) => {
        setMovieDetails(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <>
      <Header></Header>
      <MovieDetailsContainer></MovieDetailsContainer>
    </>
  );
};

export default MovieDetailsPage;
