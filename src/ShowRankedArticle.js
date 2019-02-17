import React, { Component } from "react";
import { Card, Button, Container, Alert } from "react-bootstrap";

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
    console.log(newstateValSort);

    return (
      <Container>
        <h1 style={h1_Style}> Your Ranked articles </h1>

        {this.props.articles.map((article, index) => {
          const mystate = newstateValSort[index];
          return (
            <div>
              <div className="rank_title">
                <Card key={index} body>
                  {article.title}
                  <p>{mystate}</p>
                </Card>
              </div>
            </div>
          );
        })}
      </Container>
    );
  }
}
export default ShowRankedArticle;
