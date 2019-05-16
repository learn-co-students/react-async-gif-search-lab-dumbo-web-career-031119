import React from 'react'
import Search from '../components/Search'
import DogCard from '../components/DogCard'

class ListContainer extends React.Component {
  state={
    dogs: [],
    term: "terrier-westhighland"
  }

  componentDidMount() {
    this.fetchBreed(this.state.term)
    .then(dogs => {
      this.setState({
        dogs: dogs.message
      })
    })
  }

  fetchBreed = (term) => {
    return fetch(`https://dog.ceo/api/breed/${term}/images/random/3`)
      .then(res => res.json())
  }

  handleChange = (term) => {
    this.setState({
      term: term
    })
  }

  handleFormSubmit = () => {
    this.fetchBreed(this.state.term)
    .then(dogs => {
      this.setState({
        dogs: dogs.message
      })
    })
  }

  render() {
    const dogCards = this.state.dogs.map((dog,i) => <DogCard key={i} dog={dog}/>)
    return(
      <div>
        <Search handleChange={this.handleChange} term={this.state.term} handleFormSubmit={this.handleFormSubmit}/>
        {dogCards}
      </div>
    )
  }
}

export default ListContainer
