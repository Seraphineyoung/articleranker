import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, Container } from "react-bootstrap";
import "./ranking.css";

const h1_Style = {
  fontSize: "2rem",
  textAlign: "center",
  color: "white",
  marginTop: "1rem "
};

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
      <Container>
        <h1 style={h1_Style}>Rank Your articles by clicking the Heart Icon</h1>

        {this.props.articles.map((article, index) => {
          const mystate = myArray[index];
          return (
            <div>
              <div className="rank_title">
                <Card key={index} body>
                  {article.title}
                  <div className="increment">
                    <Button
                      variant="outline-light"
                      onClick={() => this.props.addLikes(index)}
                    >
                      <FontAwesomeIcon icon="heart" className="heart" />
                    </Button>

                    <p className="counter">{mystate}</p>

                    <Button
                      variant="outline-light"
                      onClick={() => this.props.subtractLikes(index)}
                    >
                      <FontAwesomeIcon
                        icon="heart-broken"
                        className="heartbroken"
                      />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
        <Button variant="secondary" size="lg" block>
          Submit Ranking
        </Button>
      </Container>
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
