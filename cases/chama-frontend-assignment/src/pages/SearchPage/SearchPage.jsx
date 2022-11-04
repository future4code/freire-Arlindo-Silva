import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../../context/GlobalContext";
import { HistoryButton, SearchPageContainer, UserContainer } from "./styled";
import { CircularProgress } from "@mui/material";

const SearchPage = () => {
  const { onSubmitForm, onSearch, search, user, isLoading } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  console.log(isLoading, user);

  return (
    <SearchPageContainer>
      <header>
        <h3>Search</h3>
        <form onSubmit={onSubmitForm}>
          <input
            placeholder="Search with username"
            type="text"
            value={search}
            onChange={onSearch}
          />
        </form>
      </header>
      {!isLoading ? (
        user && user !== "Notfound" && user !== undefined ? (
          <UserContainer>
            <img src={user.avatar_url} alt="" />
            <h4>{user.name}</h4>
            <p>{user.login}</p>
            <div>
              <p>Public Repositories: {user.public_repos}</p>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                Acessar perfil no github
              </a>
            </div>
          </UserContainer>
        ) : user === "Notfound" ? (
          <p>User not found</p>
        ) : null
      ) : search ? (
        <section>
          <CircularProgress color={"inherit"} size={50} />
        </section>
      ) : null}

      <HistoryButton onClick={() => navigate("/search-history")}>
        History
      </HistoryButton>
    </SearchPageContainer>
  );
};

// const user = {
//   login: "vinyperroni",
//   id: 104537653,
//   node_id: "U_kgDOBjseNQ",
//   avatar_url: "https://avatars.githubusercontent.com/u/104537653?v=4",
//   gravatar_id: "",
//   url: "https://api.github.com/users/vinyperroni",
//   html_url: "https://github.com/vinyperroni",
//   followers_url: "https://api.github.com/users/vinyperroni/followers",
//   following_url:
//     "https://api.github.com/users/vinyperroni/following{/other_user}",
//   gists_url: "https://api.github.com/users/vinyperroni/gists{/gist_id}",
//   starred_url:
//     "https://api.github.com/users/vinyperroni/starred{/owner}{/repo}",
//   subscriptions_url: "https://api.github.com/users/vinyperroni/subscriptions",
//   organizations_url: "https://api.github.com/users/vinyperroni/orgs",
//   repos_url: "https://api.github.com/users/vinyperroni/repos",
//   events_url: "https://api.github.com/users/vinyperroni/events{/privacy}",
//   received_events_url:
//     "https://api.github.com/users/vinyperroni/received_events",
//   type: "User",
//   site_admin: false,
//   name: "Arlindo Vinícius Amado Nascimento Silva",
//   company: null,
//   blog: "https://www.linkedin.com/in/arlindo-vinicius/",
//   location: null,
//   email: null,
//   hireable: null,
//   bio: null,
//   twitter_username: null,
//   public_repos: 7,
//   public_gists: 0,
//   followers: 9,
//   following: 1,
//   created_at: "2022-04-28T00:02:59Z",
//   updated_at: "2022-09-17T17:01:41Z",
// };

export default SearchPage;
