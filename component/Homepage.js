import { Link } from "react-router-dom";
import React, { Component } from "react";

// Homepage component
export class Homepage extends Component {
 // Set document title on component mount
 componentDidMount() {
    document.title = "Headline Hub";
 }
 // Render Homepage component
 render() {
    return (
      <div className="Homepage ">
        <div className="Homepage-content ">
          <h1 className="my-2 ">Stay Informed with Headline Hube</h1>
          <button type="button" class="btn btn-lg my-5 home-btn">
            <Link style={{ textDecoration: "none" }} to="/general">
              Get Start
            </Link>
          </button>
        </div>
      </div>
    );
 }
}

export default Homepage;
