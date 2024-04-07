import React, { Component } from "react";

export class NewsItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open(this.props.newsUrl, "_blank"); // Open URL in new window
  }
  render() {
    let { title, description, imgurl, newsUrl, author, date } = this.props;
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-2 hover:transform hover:scale-105 transition duration-150 ease-in-out">
        <img
          className="w-full h-auto"
          src={
            imgurl
              ? imgurl
              : "https://images.indianexpress.com/2024/04/IPL-2024_DC-vs-KKR_M16-01.jpg"
          }
          alt="Card"
        />

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>

          <p className="text-xs mt-2 text-gray-500">
            By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
          </p>
        </div>
        <div className="flex justify-center m-2">
          <button
            className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-700 hover:transform hover:scale-105 transition duration-150 ease-in-out"
            onClick={this.handleClick}
          >
            Read More
          </button>
        </div>
      </div>
    );
  }
}

export default NewsItem;
