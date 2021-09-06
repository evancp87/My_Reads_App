import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";
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

    if (query === "") {
      this.setState(() => ({ searchBooks: [], }));
    } else if (query !== "") {
      const searchBooks = await BooksAPI.search(query);

      try {
        if (searchBooks !== undefined && searchBooks.length > 1) {
          this.setState(() => ({ searchBooks: searchBooks }));
        } else if ( searchBooks.error || searchBooks === undefined) {
            this.setState(() => ({searchBooks: []})); 
            

        } else {
          this.SetState(() => ({ searchBooks: [] }));
        }
        return searchBooks;
      } catch(error) {
        console.log(error);
      }
    }

  
  };

  render() {
    const { query } = this.state;

    const { onChangeShelf, books } = this.props;

    const showBooks = this.state.searchBooks;


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
              {showBooks.map((book) => {
                  const bookOnShelf = books.find(({id}) => book.id === id );
                  const shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
                  
                  return (
                <li key={book.id}>
                  <Book
                    book={{...book, shelf}}
                    onChangeShelf={onChangeShelf}
                    
                  />
                </li>
  )})}
            </ol>
          }
        </div>
      </div>
    );
  }
}

export default BookSearch;
