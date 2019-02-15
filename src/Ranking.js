import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ranking.css";

class Ranking extends Component {
  render() {
    const myArray = [
      this.props.like0,
      this.props.like1,
      this.props.like2,
      this.props.like3,
      this.props.like4
    ];
    // console.log(myArray);

    return (
      <div className="rank_border">
        <h1>Please Rank Your articles by clicking the Heart Icon</h1>

        {this.props.articles.map((article, index) => {
          const mystate = myArray[index];
          return (
            <div>
              <div className="rank_title">
                <h1 key={index}>{article.title}</h1>
                <div>
                  <button onClick={() => this.props.addLikes(index)}>
                    <FontAwesomeIcon icon="heart" className="heart" />
                  </button>

                  <p>{mystate}</p>

                  <button onClick={() => this.props.subtractLikes(index)}>
                    <FontAwesomeIcon
                      icon="heart-broken"
                      className="heartbroken"
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Ranking;

{
  /* {this.props.data.map(function(data, idx) {
          return <p key={idx}>{data.name}</p>;
        })}
        ; */
}
