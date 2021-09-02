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
    
    const booksOnShelf = this.props.books.filter(book=>book.shelf === shelves);

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/* TODO: might have to change books prop back to this.props.books */}
            {shelves.map((shelf) => (
              <BookShelf
              key={shelves.id}   
                books={booksOnShelf}
                shelfName={shelf.shelfName}
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
