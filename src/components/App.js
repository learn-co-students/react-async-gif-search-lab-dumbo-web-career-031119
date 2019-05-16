import React from 'react'

import NavBar from './NavBar'
import ListContainer from '../containers/ListContainer'

// the App component should render out the GifListContainer component

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        < ListContainer />
    </div>
  )
}

export default App
