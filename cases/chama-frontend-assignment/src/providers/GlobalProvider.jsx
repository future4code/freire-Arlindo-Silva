import GlobalContext from "../context/GlobalContext";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function GlobalProvider(props) {
  const [search, setSearch] = useState("");
  const [user, setUser] = useState(undefined);
  const [searchHistory, setSearchHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("searchHistory")) {
      setSearchHistory(JSON.parse(localStorage.getItem("searchHistory")));
    }
  }, [user]);

  const updateHistory = (username) => {
    let newSearchHistory = [];
    for (const item of searchHistory) {
      if (item !== username && item !== "") {
        newSearchHistory = [...newSearchHistory, item];
      }
    }
    setSearchHistory([`${username}`, ...newSearchHistory]);
    localStorage.setItem(
      "searchHistory",
      JSON.stringify([`${username}`, ...newSearchHistory])
    );
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    if (search) {
      getUser(search);
    } else {
      setUser(undefined);
    }
  };

  const onSearch = (ev) => {
    setSearch(ev.target.value);
    console.log(isLoading);
  };

  const getUser = (username) => {
    setIsLoading(true);
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((response) => {
        updateHistory(username);
        setUser(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setUser("Notfound");
        console.log(user);
        setIsLoading(false);
      });
  };

  const removeSearch = (username) => {
    let newSearchHistory = [];
    for (const item of searchHistory) {
      if (item !== username && item !== "") {
        newSearchHistory = [...newSearchHistory, item];
      }
    }
    setSearchHistory(newSearchHistory);
    localStorage.setItem("searchHistory", JSON.stringify(newSearchHistory));
  };

  return (
    <GlobalContext.Provider
      value={{
        onSubmitForm,
        onSearch,
        search,
        user,
        setSearch,
        getUser,
        setUser,
        isLoading,
        removeSearch,
        searchHistory,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
}
