import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class Search extends Component {
    state = {
        query: "",
        searchResults: [],
        books: []
    }

    componentDidMount() {
        BooksAPI.getAll().then(response => {
            this.setState({
                books: response
            })
        })
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
            BooksAPI.search(query).then(response => {
                // No books display upon error
                if(response.error) {
                    this.setState({
                        searchResults: []
                    });
                } else {
                //If the resulting searched book is also on a shelf, this matches its search page state to the library page state
                    response.forEach(b => {
                        let searchResult = this.state.books.filter(B => B.id === b.id);
                        if (searchResult[0]) {
                            b.shelf = searchResult[0].shelf;
                        }
                    });
                    this.setState({
                        searchResults: response
                    })    
                }
            })
        } else {
            // No books displayed when search bar is empty
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
                        {this.state.searchResults.map(book => (
                            <li key={book.id}>
                                <Book
                                    book={book}
                                    onSwitchShelf={this.props.onSwitchShelf}
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search