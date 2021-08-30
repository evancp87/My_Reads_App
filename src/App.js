import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import { Route } from "react-router-dom";
import BookShelf from "./BookShelf";
import BookSearch from "./BookSearch";

class BooksApp extends React.Component {
  state = {
    books: [],
    screen: "bookshelf",
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
      console.log(books)
    });
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((res) => {
      this.setState((currentState) => {
        books: currentState.books
          .filter((bk) => bk.id !== book.id)
          .concat({ ...book, shelf });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookShelf
              changeShelf={this.changeShelf}
              books={this.state.books}
              onNavigate={() => {
                this.setState(() => ({ screen: "search" }));
              }}
            />
          )}
        ></Route>
        <Route
          path="/search"
          render={() => (
            <BookSearch
              books={this.state.books}
              onChangeShelf={this.changeShelf}
            />
          )}
        ></Route>
      </div>
    );
  }
}

export default BooksApp;
