import React, { Component } from "react";
import MyArticle from "./Myarticle";
import data1 from "./data.json/article-1.json";
import data2 from "./data.json/article-2.json";
import data3 from "./data.json/article-3.json";
import data4 from "./data.json/article-4.json";
import data5 from "./data.json/article-5.json";
import Navigation from "./Navigation";
import Ranking from "./Ranking";
import "./article_shower.css";

const myArray = [data1, data2, data3, data4, data5];

class ArticleShower extends Component {
  render() {
    return (
      <div className="container">
        <div>
          <MyArticle article={this.props.article} />
        </div>

        <div>
          <Navigation
            forwardClick={this.props.loadNextArticle}
            backwardClick={this.props.loadPrevArticle}
          />
        </div>
      </div>
    );
  }
}

export default ArticleShower;
