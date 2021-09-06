import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {
    const shelfBooks = this.props.books;
    const { onChangeShelf } = this.props;
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {shelfBooks.map((book) => (
              <li key={book.id}>
                <Book
                  value={book.shelf}
                  book={book}
                  onChangeShelf={onChangeShelf}
                  currentShelf={book.shelf}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelf;
