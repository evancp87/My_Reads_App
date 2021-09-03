import React, { Component } from "react";
import ShelfPicker from './ShelfPicker'

class Book extends Component {
  
  render() {
    const { book } = this.props;
    return (
      
        <li>
          <div className="book">
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
            ></div>
            <div className="book-shelf-changer">
              <ShelfPicker
              value={book.shelf}
              onChange={(event) => {
                this.handleChange(event);
            }}
              />
            </div>

            <div className="book-title">{book.title ? book.title : 'no title provided'}</div>
            <div className="book-authors">{book.authors ? book.authors.join(',') : 'no author provided'}</div>
          </div>
        </li>

    );
  }
}

export default Book;
