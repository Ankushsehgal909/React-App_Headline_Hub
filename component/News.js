
// Import necessary components
import React, { Component } from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

// Create News class component
export class News extends Component {
 // Set default props
 static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
 };

 // Set prop types
 static AddContactPropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
 };

 // Constructor to initialize state
 constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = this.props.category;
 }

 // Fetch news data from API
 async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.API}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
 }

 // Fetch data on component mount
 async componentDidMount() {
    this.updateNews();
 }

 // Handle next button click
 handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
 };

 // Handle previous button click
 handlePreClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews;
  };
  // Fetch data on scrolling
  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${process.env.API}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      <div>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      articles
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://images.theconversation.com/files/523890/original/file-20230502-16-holf94.jpg?ixlib=rb-1.1.0&rect=7%2C0%2C21024&q=45&auto=format&w=1356&h=668&fit=crop"
                      }
                      newsUrl={element.url}
                      author={element.author ? element.author : "unknown"}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}

export default News;
