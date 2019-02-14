import React, { Component } from "react";
// import data1 from "./data.json/article-1.json";
// import data2 from "./data.json/article-2.json";
// import data3 from "./data.json/article-3.json";
// import data4 from "./data.json/article-4.json";
// import data5 from "./data.json/article-5.json";
import "./article.css";

class Myarticle extends Component {
  render() {
    const data1 = this.props.article;
    console.log(this.props.article);

    return (
      <div>
        <div className="article_container">
          <h1>{data1.title}</h1>
        </div>
        <div className="article_container">
          {data1.body.map(body_index => {
            return (
              <div>
                <p>{body_index.type}</p>
                <p>{body_index.model.text}</p>
                <p>{body_index.model.url}</p>
                <p>{body_index.model.altText}</p>
                <p>{body_index.model.height}</p>
                <p>{body_index.model.width}</p>
                <p>{body_index.model.type}</p>
                <p>{body_index.model.items}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Myarticle;

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
