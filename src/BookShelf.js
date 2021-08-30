import React, { Component } from "react";
import ShelfPicker from "./ShelfPicker";
import { Link } from "react-router-dom";

class BookShelf extends Component {
  render() {
    const wantToRead = this.props.books.filter(
      (book) => book.shelf === "wantToRead"
    );
    const currentlyReading = this.props.books.filter(
      (book) => book.shelf === "currentlyReading"
    );
    const alreadyRead = this.props.books.filter(
      (book) => book.shelf === "alreadyRead"
    );
    // TODO change background image, background authors and title to placeholders
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {currentlyReading.map((book) => (
                    <li key={book.title}>
                      <div className="book"></div>
                      <div className="book-top"></div>
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: "url()",
                        }}
                      />
                      <div className="book-title">{book.title}</div>
                      <div className="book-authors">{book.author}</div>
                      <ShelfPicker
                        className="book-shelf-changer"
                        onClick={() => this.props.onChangeShelf(book)}
                      />
                    </li>
                  ))}
                </ol>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {wantToRead.map((book) => (
                      <li key={book.title}>
                        <div className="book"></div>
                        <div className="book-top"></div>
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: "url(`${book.imageLink}`)",
                          }}
                        />
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
                        <ShelfPicker
                          className="book-shelf-changer"
                          onClick={() => this.props.onChangeShelf(book)}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {alreadyRead.map((book) =>
                      book(
                        <li key={book.title}>
                          <div className="book"></div>
                          <div className="book-top"></div>
                          <div
                            className="book-cover"
                            style={{
                              width: 128,
                              height: 192,
                              backgroundImage: "url()",
                            }}
                          />
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.author}</div>
                          <ShelfPicker
                            className="book-shelf-changer"
                            onClick={() => this.props.onChangeShelf(book)}
                          />
                        </li>
                      )
                    )}
                  </ol>
                </div>
              </div>
            </div>

            <div className="open-search">
                <Link 
                to='/search'
                className="open-search">
                    <button></button> 
                </Link>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookShelf;
