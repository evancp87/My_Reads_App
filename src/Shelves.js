import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";

class Shelves extends Component {
  render() {
  

    const shelves = [
      { shelfName: "Currently Reading", id: "currentlyReading" },
      { shelfName: "Want to Read", id: "wantToRead" },
      { shelfName: "Read", id: "read" },
    ];

    

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {shelves.map((shelf) => (
              <BookShelf
                books={shelf.title}
                shelf={shelf.id}
                changeShelf={this.props.changeShelf}
              />
            ))}
          </div>

          <div className="open-search">
            <Link to="/search" className="open-search">
              <button></button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelves;
