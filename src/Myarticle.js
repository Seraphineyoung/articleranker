import React, { Component } from "react";
import { Card, Container, Alert } from "react-bootstrap";

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
    return (
      <Container>
        <Alert variant="success">
          <div style={article_container}>
            <Card.Header>
              <h1 style={h1_Style}>{this.props.article.title}</h1>
            </Card.Header>
          </div>
          <div style={para_wrapper}>
            {this.props.article.body.map((body_index, index) => {
              return (
                <Card style={myCard} key={index}>
                  <div>
                    <Card.Title style={{ fontSize: "1.5rem" }}>
                      <p>{body_index.type}</p>
                    </Card.Title>
                    <p>{body_index.model.text}</p>
                    <img
                      src={body_index.model.url}
                      alt={body_index.model.altText}
                      style={{
                        width: body_index.model.width,
                        height: body_index.model.height
                      }}
                    />
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
