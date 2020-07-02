import React from 'react'
import SearchMovie from "../component/SearchMovie.js"
import '../style/style.css'

class App extends React.Component{
	render(){
		return(
			<div className="container">
				<div className="title">React Movie Search</div>
				<SearchMovie />

			</div>
		)
	}
}

export default App