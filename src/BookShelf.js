import React, { Component } from "react";
import Book from "./Book";

class BookShelf extends Component {
  render() {

   
    const shelfBooks = this.props.books;

    return (
      
           <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.shelf}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {shelfBooks.map(book => (
                        <Book
                        book={book}
                        changeShelf={this.props.changeShelf}
                        currentShelf={book.shelf}
                        />
                    ))}  
                </ol>
              </div>

              </div>
            </div>
           )}}
            
           
    
      
 
export default BookShelf;
