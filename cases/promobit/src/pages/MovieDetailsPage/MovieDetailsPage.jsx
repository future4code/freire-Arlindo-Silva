import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import {
  BlueArea,
  CastContainer,
  MovieDetails,
  MovieDetailsContainer,
  RecomendationsContainer,
  TrailerContainer,
} from "./styled";

import CircularProgress from "@mui/material/CircularProgress";

import Header from "../../components/Header/Header";
import { Await, useLocation, useParams } from "react-router-dom";
import {
  API_KEY,
  BASE_URL,
  COUNTRY,
  LANGUAGE,
} from "../../constants/constants";
import axios from "axios";
import CircularProgressWithLabel from "../../components/RatingProgress/RatingProgress";
import ActorCard from "../../components/ActorCard/ActorCard";
import MovieCard from "../../components/MovieCard/MovieCard";

const MovieDetailsPage = () => {
  const pathParams = useParams();

  const [movieDetails, setMovieDetails] = useState({
    title: null,
    posterPath: null,
    releaseDate: null,
    certification: null,
    genres: [],
    runtime: null,
    rating: null,
    cast: [],
    crew: [],
    overview: null,
    videoKey: null,
    recomendations: [],
  });

  const detailsUrl = `${BASE_URL}movie/${pathParams.id}?api_key=${API_KEY}&language=${LANGUAGE}`;
  const creditsUrl = `${BASE_URL}movie/${pathParams.id}/credits?api_key=${API_KEY}&language=${LANGUAGE}`; // cast
  const recomendationsUrl = `${BASE_URL}movie/${pathParams.id}/recommendations?api_key=${API_KEY}&language=${LANGUAGE}`; // recomendations
  const releaseDatesUrl = `${BASE_URL}movie/${pathParams.id}/release_dates?api_key=${API_KEY}&language=${LANGUAGE}`; // release dates
  const videosUrl = `${BASE_URL}movie/${pathParams.id}/videos?api_key=${API_KEY}&language=${LANGUAGE}`;

  useEffect(() => {
    window.scroll(0, 0);
    getInformations();
  }, [pathParams.id]);

  const getInformations = () => {
    axios
      .get(detailsUrl)
      .then((response) => {
        setMovieDetails((prevState) => ({
          ...prevState,
          title: response.data.title,
          posterPath: response.data.poster_path,
          overview: response.data.overview,
          runtime: convertRuntime(response.data.runtime),
          genres: response.data.genres.map((genre) => genre.name),
          rating: response.data.vote_average,
        }));
      })
      .catch((error) => console.log(error.message));

    axios
      .get(creditsUrl)
      .then((response) => {
        setMovieDetails((prevState) => ({
          ...prevState,
          cast: response.data.cast,
          crew: response.data.crew,
        }));
      })

      .catch((error) => console.log(error.message));

    axios
      .get(recomendationsUrl)
      .then((response) => {
        setMovieDetails((prevState) => ({
          ...prevState,
          recomendations: response.data.results,
        }));
      })
      .catch((error) => console.log(error.message));

    axios
      .get(releaseDatesUrl)
      .then((response) => {
        const filteredResponse =
          response.data.results.filter(
            (item) => item.iso_3166_1 === COUNTRY
          )[0] ||
          response.data.results.filter((item) => item.iso_3166_1 === "GB")[0];

        setMovieDetails((prevState) => ({
          ...prevState,
          releaseDate: new Date(filteredResponse.release_dates[0].release_date)
            .toLocaleString()
            .split(" ")[0],
          certification: filteredResponse.release_dates[0].certification,
        }));
      })
      .catch((error) => console.log(error.message));

    axios
      .get(videosUrl)
      .then((response) => {
        console.log(response.data);
        const trailers = response.data.results.filter(
          (video) => video.type === "Trailer"
        );
        const teasers = response.data.results.filter(
          (video) => video.type === "Teaser"
        );

        const others = response.data.results.filter(
          (video) => video.type !== "Teaser" && video.type !== "Trailer"
        );

        setMovieDetails((prevState) => ({
          ...prevState,
          videoKey: trailers[0]?.key || teasers[0]?.key || others[0]?.key || "",
        }));
      })
      .catch((error) => console.log(error.message));
  };

  const convertRuntime = (runtime) => {
    let minutes = runtime;
    let hours = 0;

    while (minutes > 60) {
      hours++;
      minutes = minutes - 60;
    }

    return `${hours}h ${minutes}m`;
  };

  return (
    <>
      {console.log(movieDetails)}
      <Header></Header>

      <MovieDetailsContainer>
        <BlueArea>
          {movieDetails ? (
            <MovieDetails>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movieDetails.posterPath}`}
                alt="Cover"
              />
              <div id="details">
                {movieDetails.title && movieDetails.releaseDate ? (
                  <p id="title">
                    {movieDetails.title} (
                    {movieDetails.releaseDate.split("/")[2]})
                  </p>
                ) : (
                  <p id="title">Titulo (ANO)</p>
                )}

                {movieDetails.certification &&
                movieDetails.releaseDate &&
                movieDetails.runtime &&
                movieDetails.genres ? (
                  <div id="sub-title">
                    <p>
                      {movieDetails.certification}{" "}
                      {isNaN(Number(movieDetails.certification))
                        ? null
                        : "anos"}{" "}
                      &bull;{"  "}
                    </p>
                    <p>
                      {movieDetails.releaseDate} ({COUNTRY}) &bull;{" "}
                    </p>
                    <p>
                      {movieDetails.genres.toString().replaceAll(",", ", ")}{" "}
                      &bull;{" "}
                    </p>
                    <p>{movieDetails.runtime}</p>
                  </div>
                ) : (
                  <p id="sub-title">
                    Classificação Indicativa &bull; Data de Lançamento (PAÍS)
                    &bull; Géneros &bull; Tempo
                  </p>
                )}

                <section>
                  <CircularProgressWithLabel
                    value={movieDetails.rating ? movieDetails.rating * 10 : 100}
                    id="rating"
                  />
                  <p>
                    Avaliação dos <br /> usuários
                  </p>
                </section>
                <p id="overview-title">Sinopse</p>
                <p id="overview">
                  {movieDetails.overview
                    ? movieDetails.overview
                    : "Sinopse do filme"}{" "}
                </p>
                <div id="crew">
                  {movieDetails.crew
                    ? movieDetails.crew.map((item) => {
                        if (
                          item.job === "Characters" ||
                          item.job === "Director" ||
                          item.job === "Screenplay"
                        ) {
                          return (
                            <div key={item.id}>
                              <p id="name">{item.name}</p>
                              <p id="job">{item.job}</p>
                            </div>
                          );
                        } else {
                          return false;
                        }
                      })
                    : "Equipe de Produção"}
                </div>
              </div>
            </MovieDetails>
          ) : null}
        </BlueArea>

        <CastContainer>
          <p>Elenco Original</p>
          <div>
            {movieDetails.cast &&
              movieDetails.cast.map((actor) => (
                <ActorCard key={actor.id} actor={actor} />
              ))}
          </div>
        </CastContainer>

        {movieDetails.videoKey && (
          <TrailerContainer>
            <p>Trailer</p>
            <iframe
              alignSelf="flex-start"
              src={`https://www.youtube.com/embed/${movieDetails.videoKey}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </TrailerContainer>
        )}

        {movieDetails.recomendations[0] && (
          <RecomendationsContainer>
            <p>Recomendações</p>
            <div>
              {movieDetails.recomendations.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          </RecomendationsContainer>
        )}
      </MovieDetailsContainer>
    </>
  );
};

export default MovieDetailsPage;
