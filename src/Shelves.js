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
    
    const {onChangeShelf} = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {shelves.map((shelf) => {
              const booksOnShelf = this.props.books.filter(book=>book.shelf === shelf.id);
              return ( 
              <div key={shelf.id}>
              <BookShelf  
                books={booksOnShelf}
                shelfName={shelf.shelfName}
                onChangeShelf={onChangeShelf}
              />
              </div>
            )})}
          </div>

          <div className="open-search">
            <Link to="/search" className="open-search">
              <button></button>
            </Link>
          </div>
        </div>
      
    );
  }
}

export default Shelves;
