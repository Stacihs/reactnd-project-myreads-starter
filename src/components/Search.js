import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {
    state = {
        query: "",
        searchResults: []
    }

    updateQuery = (query) => {
        this.setState({
            query: query
        },
        this.updateSearchResults(query)
        )
    }

    updateSearchResults = (query) => {
        if (query) {
            BooksAPI.search(query.trim()).then((searchResults) => {
                // No books display upon error
                if(searchResults.error) {
                    this.setState({
                        searchResults: []
                    });
                } else {
                //Show all books that match to user input in search bar
                    this.setState({
                        searchResults: searchResults
                    })    
                }
            })
        } else {
            // No books diplayed when search bar is empty
            this.setState({
              searchResults: []
            })
        }
    }
    
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchResults.map(searchResult => (
                            <li key={searchResult.id}>
                                <Book book={searchResult} onSwitchShelf={this.props.onSwitchShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
