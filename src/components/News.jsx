import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      article: [],
      loading: false,
      page: 1,
      totalresult :0,
    };
    document.title = `${this.capitalize(this.props.category)} - NewsMonkey`;
  }

  update = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b01ea4e2ce07474697d35429c2528eb0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const temp = await data.json();
    this.setState({
      article: temp.articles,
      totalresult: temp.totalResults,
      loading: false,
    });
  };
  async componentDidMount() {
    this.update();
  }

  fetchMoreData = async () => {

    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b01ea4e2ce07474697d35429c2528eb0&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const data = await fetch(url);
    const temp = await data.json();
    this.setState({
      article: this.state.article.concat(temp.articles),
      // article : [ ...article, ...[temp.articles]],
      totalresult: temp.totalResults,
      loading: false,
    });
  };
  // onPrev = async () => {
  //   this.setState({
  //     page: this.state.page + 1,
  //   })
  //   this.update();
  // };

  // onNext = async () => {
  //   this.setState({ page : this.state.page + 1});
  //   this.update();
  // };

  render() {
    return (
      <div className="w-4/5 mx-auto">
        <h1 className="text-center text-3xl m-3">
          <strong>
            NewsMonkey - Top {this.capitalize(this.props.category)} Headlines
          </strong>{" "}
        </h1>
        {this.state.loading && <Spin></Spin>}

        <InfiniteScroll
          dataLength={this.state.article.length}
          next={this.fetchMoreData} //To put endMessage and loader to the top.
          hasMore={this.state.article.length < this.state.totalresult}
          loader={<Spin />}
        >
          <div className="flex flex-wrap justify-center">
            {this.state.article.map((e) => {
              return (
                <div
                  className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4"
                  key={e.title}
                >
                  <NewsItem
                    title={e.title ? e.title : ""}
                    description={e.description ? e.description : ""}
                    imgurl={e.urlToImage}
                    newsUrl={e.url}
                    date={e.publishedAt}
                    author={e.author}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
        {/* <div className="flex justify-between m-6">
          <button
            className={`mr-2 px-4 py-2 hover:scale-105 duration-150 bg-blue-500 text-white rounded hover:bg-blue-600 ${
              this.state.page <= 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={this.state.page <= 1}
            onClick={this.onPrev}
          >
            &larr; Previous
          </button>
          <button
            className={`mr-2 px-4 py-2 hover:scale-105 duration-150 bg-blue-500 text-white rounded hover:bg-blue-600 ${
              this.state.page + 1 >
              Math.ceil(this.state.totalresult / this.props.pageSize)
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            onClick={this.onNext}
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalresult / this.props.pageSize)
            }
          >
            Next &rarr;
          </button> */}
        {/* </div> */}
      </div>
    );
  }
}

export default News;

