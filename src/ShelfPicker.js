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


    return (
        <select
          value={this.state.value}
          onChange={this.handleChange}
          
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="alreadyRead">Read</option>
          <option value="none">None</option>
        </select>
      
    );
  }
}

export default ShelfPicker;
