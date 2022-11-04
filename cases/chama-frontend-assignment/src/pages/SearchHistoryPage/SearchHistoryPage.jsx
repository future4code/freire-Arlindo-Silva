import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import { SearchHistory, SearchHistoryPageContainer } from "./styled";
import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";

const SearchHistoryPage = (props) => {
  const navigate = useNavigate();

  const { getUser, removeSearch, searchHistory } = useContext(GlobalContext);

  const goToSearchPage = (data) => {
    getUser(data);
    navigate("/");
  };

  return (
    <SearchHistoryPageContainer>
      <header>
        <IconButton
          onClick={() => navigate(-1)}
          color="primary"
          sx={{
            color: "white",
          }}
          aria-label="upload picture"
          component="label"
        >
          <ArrowBackIcon />
        </IconButton>

        <h4>Search History</h4>
      </header>
      <SearchHistory>
        {searchHistory && searchHistory.length > 0 ? (
          searchHistory.map((data) => {
            return (
              <div key={data}>
                <p onClick={() => goToSearchPage(`${data}`)}>{data}</p>
                <IconButton
                  onClick={() => removeSearch(data)}
                  color="primary"
                  sx={{
                    color: "white",
                  }}
                  aria-label="upload picture"
                  component="label"
                >
                  <RemoveCircleIcon />
                </IconButton>
              </div>
            );
          })
        ) : (
          <p>Empty History</p>
        )}
      </SearchHistory>
    </SearchHistoryPageContainer>
  );
};

export default SearchHistoryPage;
