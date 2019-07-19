import React, { Component } from 'react';

class Search extends Component {



handleSubmit = (e) => {
	e.preventDefault()5
	this.props.ashley()
}
  render() {
    return (
      <div>
    <h1>SEARCH FORM</h1>
    <form onSubmit ={this.handleSubmit}>
    <input type="text" onChange={(e) => this.props.handleTermChange(e.target.value)}
    value={this.props.term}/>
     <input type="submit" value="Submit" />
    </form>
      </div>
    );
  }

}

export default Search
;
