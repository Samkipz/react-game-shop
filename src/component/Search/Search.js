import React from 'react'
import './Search.scss'
import games from '../../fakeData/games'

function Search(props) {

    return (
        //in form onSubmit={this.props.onSubmit}
        <form id="search" className="Search">
            <input type="search" onChange={props.handleChange} placeholder="Search for a game..." />
        </form>
    )
}

export default Search