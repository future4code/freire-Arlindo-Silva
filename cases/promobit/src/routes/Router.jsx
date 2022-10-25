import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage/MovieDetailsPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/movie/:title" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
