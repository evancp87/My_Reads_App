import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Shelves from "./Shelves";
import { Route } from "react-router-dom";
import BookSearch from "./BookSearch";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.changeShelf = this.changeShelf.bind(this);
  }
  
  state = {
    books: [],
    screen: "shelves",
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }));
      console.log(books);
    });
  }

  changeShelf =  (book, shelf) => {    
     BooksAPI.update(book, shelf)   
     .then(() => { BooksAPI.getAll()
     .then((res) => {
      this.setState({
        books: res,
// .filter((bk) => bk.id !== book.id)
//           .concat({ ...book, shelf }),
      });
      
    })});  
  };
  

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Shelves
              onChangeShelf={this.changeShelf}
              books={this.state.books}
              shelves={this.shelf}
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
