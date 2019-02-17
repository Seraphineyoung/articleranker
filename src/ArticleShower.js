import React, { Component } from "react";
import MyArticle from "./Myarticle";
import Navigation from "./Navigation";

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
