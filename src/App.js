import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faHeart, faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import ArticleShower from "./ArticleShower";
import Ranking from "./Ranking";
import ShowRankedArticle from "./ShowRankedArticle";
import "./App.css";

library.add(fab, faHeart, faHeartBroken);

const urls = [
  "https://www.mocky.io/v2/5c6573f93300003b1db99de1",
  "https://www.mocky.io/v2/5c6574b33300009010b99de4",
  "https://www.mocky.io/v2/5c657510330000640eb99de5",
  "https://www.mocky.io/v2/5c65754b330000b212b99de6",
  "https://www.mocky.io/v2/5c6575663300008a12b99de8"
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      like0: 0,
      like1: 0,
      like2: 0,
      like3: 0,
      like4: 0,
      articles: [],
      articleIndex: -1,

      ranked: false
    };

    this.addLikes = this.addLikes.bind(this);
    this.subtractLikes = this.subtractLikes.bind(this);
    this.ShowRankedArticle = this.ShowRankedArticle.bind(this);
  }

  ShowRankedArticle() {
    //likesForArticle to be renamed- likesForArticle
    const likesForArticle = Object.entries(this.state);

    // console.log(likesForArticle);
    //getting key and values of items in state, from 1 - 4, which are the likes values
    const stateKeys = [
      likesForArticle[0],
      likesForArticle[1],
      likesForArticle[2],
      likesForArticle[3],
      likesForArticle[4]
    ];
    // console.log(stateKeys);
    //sorting the values of the second items in the array.
    const newstateValSort = stateKeys.sort(function(a, b) {
      return b[1] - a[1];
    });
    // console.log(newstateValSort);
    //mapping over the zeroth position of the sorted values and also getting the item at the 4th position of the string e.g "likes4" == getting 4, and coverting into a number
    const numKeyofsortedArr = newstateValSort.map((item, index) => {
      return Number(item[0][4]);
    });

    const currentState = this.state.articles;
    // console.log(currentState, "mystates");
    // console.log(numKeyofsortedArr, "sortedarr");
    const Arrsorted = numKeyofsortedArr.map(i =>
      currentState.find(o => currentState.indexOf(o) === i)
    );

    this.setState(prevState => {
      return {
        ranked: (prevState.ranked = true),
        articles: (prevState.articles = Arrsorted)
      };
    });
  }

  // updateLikesForArticle(selectedArticleNumber, articleLikes) {
  //   let likeIdentifier = "like" + selectedArticleNumber;
  //   return {
  //     [likeIdentifier]: prevState[likeIdentifier] + 1
  //   };
  // }

  addLikes(index) {
    switch (index) {
      case 0:
        this.setState(prevState => {
          return {
            like0: prevState.like0 + 1
          };
        });
        break;
      case 1:
        this.setState(prevState => {
          return {
            like1: prevState.like1 + 1
          };
        });
        break;
      case 2:
        this.setState(prevState => {
          return {
            like2: prevState.like2 + 1
          };
        });
        break;
      case 3:
        this.setState(prevState => {
          return {
            like3: prevState.like3 + 1
          };
        });
        break;
      case 4:
        this.setState(prevState => {
          return {
            like4: prevState.like4 + 1
          };
        });
    }
  }

  subtractLikes(index) {
    switch (index) {
      case 0:
        this.setState(prevState => {
          return {
            like0: prevState.like0 - 1
          };
        });
        break;
      case 1:
        this.setState(prevState => {
          return {
            like1: prevState.like1 - 1
          };
        });
        break;
      case 2:
        this.setState(prevState => {
          return {
            like2: prevState.like2 - 1
          };
        });
        break;
      case 3:
        this.setState(prevState => {
          return {
            like3: prevState.like3 - 1
          };
        });
        break;
      case 4:
        this.setState(prevState => {
          return {
            like4: prevState.like4 - 1
          };
        });
    }
  }
  loadNextArticle = () => {
    //checking if i already have the article at next articleIndex and i have a url to load it from
    // console.log(urls.length - 1);
    // console.log(this.state.articleIndex);
    if (
      this.state.articles[this.state.articleIndex + 1] === undefined &&
      urls.length - 1 > this.state.articleIndex
    ) {
      // then fetch the json file
      // the first time the index of the urls will be zero

      fetch(urls[this.state.articleIndex + 1])
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Something went wrong");
          }
        })
        .then(article => {
          console.log(article);
          this.setState(prevState => ({
            //this is creating a new array with all the items from the old and appending a new article
            articles: [...prevState.articles, article],
            articleIndex: prevState.articleIndex + 1
          }));
        })
        .catch(error => {
          console.log(error);
        });
    } else {
      // We already have the article or we've reached the end of URLS list, just increment articleIndex
      this.setState(prevState => ({
        articleIndex: prevState.articleIndex + 1
      }));
    }
  };

  loadPrevArticle = () => {
    if (this.state.articleIndex > -1) {
      this.setState(prevState => {
        return {
          articleIndex: prevState.articleIndex - 1
        };
      });
    } else {
      alert("You are at the first article");
    }
  };

  componentDidMount() {
    this.loadNextArticle();
  }

  render() {
    if (this.state.ranked === true) {
      // Posting ranked article to a mocked
      // var data = Object.assign({}, this.state.articles);
      var url = "http://www.mocky.io/v2/5c7d62e71000005815761033";
      var data = { myname: "seraphine" };
      fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(res => res.json())
        .then(response => console.log("Success:", JSON.stringify(response)))
        .catch(error => console.error("Error:", error));

      return (
        <div>
          <ShowRankedArticle
            articles={this.state.articles}
            like0={this.state.like0}
            like1={this.state.like1}
            like2={this.state.like2}
            like3={this.state.like3}
            like4={this.state.like4}
          />
        </div>
      );
    }

    // console.log(urls.length - 1);
    // console.log(this.state.articleIndex);
    if (this.state.articles.length === 0) {
      return <p>Article is Loading</p>;
    } else if (urls.length === this.state.articleIndex) {
      return (
        <div>
          {
            <Ranking
              articles={this.state.articles}
              like0={this.state.like0}
              like1={this.state.like1}
              like2={this.state.like2}
              like3={this.state.like3}
              like4={this.state.like4}
              addLikes={this.addLikes}
              subtractLikes={this.subtractLikes}
              ShowRankedArticle={this.ShowRankedArticle}
            />
          }
        </div>
      );
    } else {
      return (
        <div>
          {
            <ArticleShower
              article={this.state.articles[this.state.articleIndex]}
              loadNextArticle={this.loadNextArticle}
              loadPrevArticle={this.loadPrevArticle}
            />
          }
          ;
        </div>
      );
    }
  }
}

export default App;
