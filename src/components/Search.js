import React, { Component } from 'react';

class Search extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFormSubmit()
  }

  render() {
    return (
      <div>

        <h4>Search</h4>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={(e) => this.props.handleChange(e.target.value)} value={this.props.term}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default Search
