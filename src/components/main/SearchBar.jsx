import React, { Component } from "react";
import axios from "axios";
import API_ROUTE from "../../utils/constants";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      games: [],
      loading: false,
      message: "",
    };
    this.cancel = "";
  }

  fetchSearchResults = (updatedPageNo = "", query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";

    // By default the limit of games is 20
    const searchUrl = `${API_ROUTE}/games?e&q=${query}${pageNumber}`;

    if (this.cancel) {
      // Cancel the previous request before making a new request
      this.cancel.cancel();
    }
    // Create a new CancelToken
    this.cancel = axios.CancelToken.source();

    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        const resultNotFoundMsg = !res.data.games.length
          ? "There are no more searchgames. Please try a new search."
          : "";

        this.setState({
         games: res.data.games,
          message: resultNotFoundMsg,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetchgames.Please check network",
          });
        }
      });
  };

  renderSearchResults = () => {
    const {games, query } = this.state;
    const filteredCharacters = games.filter((game) => {
      return game.title.toLowerCase().includes(query.toLowerCase());
    });

    if (Object.keys(games).length && games.length) {
      return (
        <div className="results-container col-md-12">
          {filteredCharacters &&
            filteredCharacters.map((game) => {
              return (
                <a
                  key={game.id}
                  href={"/game/" + game.id}
                  className="result-items"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ width: "530px" }}>
                    <ul className="search-results">
                      <li className="search-image">
                        <img
                          src={game.image_url}
                          alt="image1"
                          width="40px"
                          height="40px"
                        />
                      </li>
                      <li className="search-list">{game.title}</li>
                    </ul>
                  </div>
                </a>
              );
            })}
        </div>
      );
    }
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;

    if (!query) {
      this.setState({
        query,
       games: [],
        message: "There are no more search games. Please try a new search.",
      });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };

  render() {
    const { query } = this.state;
    return (
      <div className="col-md-8 offset-md-2" style={{marginBottom:"60px"}}>
        <center><h1 className="game-search">Game Search</h1></center>
        <label className="search-label" htmlFor="search-input">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              value={query}
              onChange={this.handleOnInputChange}
              style={{
                width: "550px",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              placeholder="Search for a game ...."
            />
            <div className="input-group-append">
              <button
                onClick={this.renderSearchResults}
                type="submit"
                className="btn btn-solid"
                style={{
                  padding: "5px",
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                }}
              >
                Search
              </button>
            </div>
          </div>
        </label>
        {/*Result*/}
        <div style={{ position: "absolute", zIndex: 100 }}>
          {this.renderSearchResults()}
        </div>
      </div>
    );
  }
}

export default SearchBar;
//
// const filteredCharacters = posts.filter(post => {
//     return post.content.toLowerCase().includes(query.toLowerCase());
// });
//
// // Searching the filter post using indefOf
// const filtered = _.filter(posts, (post) => {
//     return post.title.indexOf(query) > -1
// });
// console.log(filtered, filteredCharacters);
