import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import ShelfPicker from "./ShelfPicker";
import { Link } from "react-router-dom";

class BookSearch extends Component {
  state = {
    query: "",
    searchBooks: [],
  };

  updateQuery = async (query) => {
    this.setState(() => ({
      query: query,
    }));
    if (query !== "") {
      const searchBooks = await BooksAPI.search(query);

      try {
        if (searchBooks !== undefined && searchBooks.length > 1) {
          this.setState(() => ({ searchBooks: searchBooks }));
        } else {
          this.SetState(() => ({ searchBooks: [] }));
        }
        return searchBooks;
      } catch (error) {
        console.log(error);
      }
    }
  };
  render() {
    const { query } = this.state;
    const { books, onChangeShelf } = this.props;

    const showBooks = this.state.searchBooks;

    // query === ""
    //     ? books
    //     : books.filter((bk) =>
    //         bk.name.toLowerCase().includes(query.toLowerCase())
    //       );
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {
            <ol className="books-grid">
              {showBooks.map((book) => (
                <li key={book.title}>
                  <div className="book"></div>
                  <div className="book-top"></div>
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: book.imageLinks
                        ? `url(${book.imageLinks.thumbnail})`
                        : "",
                    }}
                  />
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                  <ShelfPicker
                    className="book-shelf-changer"
                    onChange={() => onChangeShelf(book)}
                  />
                </li>
              ))}
            </ol>
          }
        </div>
      </div>
    );
  }
}

export default BookSearch;
