import React, { Component } from "react";

import "./ranking.css";

class Ranking extends Component {
  render() {
    return (
      <div className="rank_border">
        <h1>Please Rank Your articles by clicking the Heart Icon</h1>

        <div>
          <div className="rank_title">
            <h1>{this.props.mydata1.title}</h1>
            <div>
              <button>
                <i className="fa fa-heart " />
              </button>
            </div>
          </div>
          <div className="rank_title">
            <h1>{this.props.mydata2.title}</h1>
            <div>
              <button>
                <i className="fa fa-heart " />
              </button>
            </div>
          </div>
          <div className="rank_title">
            <h1>{this.props.mydata3.title}</h1>
            <div>
              <button>
                <i className="fa fa-heart " />
              </button>
            </div>
          </div>
          <div className="rank_title">
            <h1>{this.props.mydata4.title}</h1>
            <div>
              <button>
                <i className="fa fa-heart " />
              </button>
            </div>
          </div>
          <div className="rank_title">
            <h1>{this.props.mydata5.title}</h1>
            <div>
              <button>
                <i className="fa fa-heart " />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ranking;
