import React, { Component } from "react";
import { Card, Container, Alert } from "react-bootstrap";

const h1_Style = {
  fontSize: "4rem",
  textAlign: "center",
  color: "rgb(21, 87, 36)",
  marginTop: "1rem "
};

const para_wrapper = {
  padding: "0.3rem",
  fontSize: "1.2rem",
  textAlign: "center"
};

const myCard = {
  marginBottom: "0.5rem"
};

const article_container = { padding: "0.3rem", fontSize: "1.2rem" };

class ShowRankedArticle extends Component {
  render() {
    const myArray = [
      this.props.like0,
      this.props.like1,
      this.props.like2,
      this.props.like3,
      this.props.like4
    ];

    const newstateValSort = myArray.sort(function(a, b) {
      return b - a;
    });
    // console.log(newstateValSort);

    return (
      <Container>
        <Alert variant="success">
          <div style={article_container}>
            <Card.Header>
              <h1 style={h1_Style}> Your Ranked articles </h1>
            </Card.Header>
          </div>

          {this.props.articles.map((article, index) => {
            const mystate = newstateValSort[index];
            // console.log(article);
            return (
              <div key={index}>
                <div style={para_wrapper}>
                  <Card style={myCard} key={index} body>
                    {article.title}
                    <p>{mystate}</p>
                  </Card>
                </div>
              </div>
            );
          })}
        </Alert>
      </Container>
    );
  }
}
export default ShowRankedArticle;
