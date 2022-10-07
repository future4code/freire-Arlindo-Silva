import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchHistoryPage from "../pages/SearchHistoryPage/SearchHistoryPage";
import SearchPage from "../pages/SearchPage/SearchPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<SearchPage />} />
        <Route path="/search-history" element={<SearchHistoryPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
