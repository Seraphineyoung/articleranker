import React, { Component } from "react";
import { Card, Button, Container, Alert } from "react-bootstrap";
import "./article.css";

const h1_Style = {
  textAlign: "center",
  color: "#155724",
  marginTop: "1rem "
};

const article_container = { padding: "0.3rem", fontSize: "1.2rem" };

const para_wrapper = {
  padding: "0.3rem",
  fontSize: "1.2rem",
  textAlign: "center"
};

const myCard = {
  marginBottom: "0.5rem"
};

class MyArticle extends Component {
  render() {
    // const data1 = this.props.article;
    console.log(this.props.article);

    return (
      <Container>
        <Alert variant="success">
          <div style={article_container}>
            <Card.Header>
              <h1 style={h1_Style}>{this.props.article.title}</h1>
            </Card.Header>
          </div>
          <div style={para_wrapper}>
            {this.props.article.body.map(body_index => {
              return (
                <Card style={myCard}>
                  <div>
                    <Card.Title style={{ fontSize: "1.5rem" }}>
                      <p>{body_index.type}</p>
                    </Card.Title>
                    <p>{body_index.model.text}</p>
                    <p>{body_index.model.url}</p>
                    <p>{body_index.model.altText}</p>
                    <p>{body_index.model.height}</p>
                    <p>{body_index.model.width}</p>
                    <p>{body_index.model.type}</p>
                    <p>{body_index.model.items}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </Alert>
      </Container>
    );
  }
}

export default MyArticle;

// constructor() {
//   super();

// this.state = {
//   article: {}
// };

// this.handleClick = this.handleClick.bind(this);
// }
// componentDidMount() {
//   console.log("inside handleclick");
//   fetch("./data.json/article-1.json")
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         article: data
//       });
//     });
// }
