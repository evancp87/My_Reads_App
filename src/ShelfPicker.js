import React, { Component } from "react";

class ShelfPicker extends Component {

    state ={
        value: '',
    }

    handleChange = event => {
      this.setState({value: event.target.value},
      () => this.props.changeShelf(this.props.book, this.state.value));
      event.preventDefault();
    }

  render() {
    return (
      <div className="book-shelf-changer">
        <select 
        value={this.props.book.shelf}
        onChange={(event) => {this.handleChange(event)}}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="alreadyRead">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfPicker;
