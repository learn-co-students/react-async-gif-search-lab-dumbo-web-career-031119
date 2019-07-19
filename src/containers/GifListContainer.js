import React from 'react'
import Search from '../components/Search'
import DogCard from '../components/DogCard'


class ListContainer extends React.Component{



	state = {
		dogs: [],
		term: "corgi"
	}
	componentDidMount() {
		this.makeFetch(this.state.term)	
		.then(responseObj =>{
			this.setState({
				dogs: responseObj.message
			})
		})
	}

	makeFetch = (term) => {
		return fetch(`https://dog.ceo/api/breed/${term}/images/random/3`)
		.then(res => res.json())

	}


	handleTermChange = (termArg)=>{
		console.log(termArg, "From Handle")
		this.setState({
			term: termArg
		})
	}


	handleFormSumbit = (e) => {
		console.log(this.state)
		this.makeFetch(this.state.term)	
		.then(responseObj =>{
			this.setState({
				dogs: responseObj.message
			})
		})
	}

	render() {
		return(
			<div>
			<Search ashley={this.handleFormSumbit}
			handleTermChange={this.handleTermChange} term={this.state.term}/>
			{this.state.dogs.map(dogURL => {
				return <DogCard key={dogURL} dog={dogURL}/>
			})}
			</div>

		)
	}
}

export default ListContainer


