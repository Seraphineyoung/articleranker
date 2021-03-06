import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, Button, Container } from "react-bootstrap";

const h1_Style = {
  fontSize: "2rem",
  textAlign: "center",
  color: "white",
  marginTop: "1rem "
};

const mybtn = {
  fontSize: "1.5rem",
  marginBottom: "3rem",
  backgroundColor: "#c3e6cb",
  color: "black"
};

const increment = {
  display: "flex",
  justifyContent: "center"
};

const rank_title = {
  padding: "10px",
  textAlign: "center"
};

const heart = {
  color: "red",
  fontSize: "2rem"
};

const heartbroken = {
  fontSize: "2rem",
  color: "black"
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
            <div key={index}>
              <div style={rank_title}>
                <Card key={index} body>
                  {article.title}
                  <div style={increment}>
                    <Button
                      variant="outline-light"
                      onClick={() => this.props.addLikes(index)}
                    >
                      <FontAwesomeIcon icon="heart" style={heart} />
                    </Button>

                    <p style={{ fontSize: "2rem" }}>{mystate}</p>

                    <Button
                      variant="outline-light"
                      onClick={() => this.props.subtractLikes(index)}
                    >
                      <FontAwesomeIcon
                        icon="heart-broken"
                        style={heartbroken}
                      />
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          );
        })}
        <Button
          onClick={() => this.props.ShowRankedArticle()}
          style={mybtn}
          variant="secondary"
          size="lg"
          block
        >
          Submit Ranking
        </Button>
      </Container>
    );
  }
}

export default Ranking;
