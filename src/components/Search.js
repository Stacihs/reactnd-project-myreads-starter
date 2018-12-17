import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'

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
                console.log(response);
                // No books display upon error
                if(response.error) {
                    this.setState({
                        searchResults: []
                    });
                } else {
                //Show all books that match to user input in search bar
                    response.forEach(b => {
                        let searchResult = this.state.books.filter(B => B.id === b.id);
                        b.shelf = searchResult[0] ? searchResult.shelf : undefined;
                        if (searchResult[0]) {
                            console.log('match');
                            b.shelf = searchResult[0].shelf;
                        }
                    });
                    this.setState({
                        searchResults: response
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
        // let filteredResults
        // if (this.state.query) {
        //     const matchedResults = new RegExp(escapeRegExp(this.state.query), 'i')
        //     filteredResults = this.props.books.filter((book) => matchedResults.test(book.title) || matchedResults.test(book.authors))
        // } else {
        //     filteredResults = this.props.books
        // }
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
                                <Book book={book} onSwitchShelf={this.props.onSwitchShelf}/>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search
