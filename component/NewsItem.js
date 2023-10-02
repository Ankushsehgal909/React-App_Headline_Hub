import React, { Component } from "react";

jsx
// Import necessary components
import React, { Component } from 'react';

// Create NewsItem class component
export class NewsItem extends Component {
 render() {
    // Destructure props for cleaner code
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;

    // Return JSX for NewsItem component
    return (
      <div className="my-2">
        <div className="card card-bg">
          <span
            className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
            style={{ left: "80%", zIndex: "1" }}
          >
            {source}
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="">
                By {author} on {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
 }
}

export default NewsItem;
