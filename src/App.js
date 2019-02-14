import React, { Component } from "react";
import Myarticle from "./Myarticle";
import data1 from "./data.json/article-1.json";
import data2 from "./data.json/article-2.json";
import data3 from "./data.json/article-3.json";
import data4 from "./data.json/article-4.json";
import data5 from "./data.json/article-5.json";
import Navigation from "./Navigation";
import Ranking from "./Ranking";
import "./App.css";

const myArray = [data1, data2, data3, data4, data5];

class App extends Component {
  constructor() {
    super();
    this.state = {
      articleIndex: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.backwardClick = this.backwardClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        articleIndex: prevState.articleIndex + 1
      };
    });
  }

  backwardClick() {
    console.log("backwardClick");
    this.setState(prevState => {
      return {
        articleIndex: prevState.articleIndex - 1
      };
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Myarticle
            passArraylist={myArray}
            article={myArray[this.state.articleIndex]}
          />
        </div>

        <div>
          <Navigation
            handleClick={this.handleClick}
            backwardClick={this.backwardClick}
          />
        </div>
        <div>
          <Ranking
            mydata1={data1}
            mydata2={data2}
            mydata3={data3}
            mydata4={data4}
            mydata5={data5}
          />
        </div>
      </div>
    );
  }
}
export default App;

// backwardClick = { this.backwardClick }
{
  /* <Myarticle article={this.state.article} */
}
