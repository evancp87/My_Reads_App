import React, { Component } from "react";

class ShelfPicker extends Component {
  state = {
    value: this.props.shelf,
  };

  handleChange = event => {
    this.setState({ value: event.target.value });  
      this.props.onChangeShelf(this.props.book, event.target.value)
    event.preventDefault();
  };

  render() {
const {book} = this.props;

    return (
        <select
          value={book.shelf}
          onChange={this.handleChange}
          
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      
    );
  }
}

export default ShelfPicker;
