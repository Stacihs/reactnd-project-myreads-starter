import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Library extends Component { 
    //Create shelves for user to store books
    refreshShelves = () => {
        const currentRead = {
            title: "Currently Reading",
            books: this.props.books.filter(book => book.shelf === 'currentlyReading')
        };
        const wantRead = {
            title: "Want to Read",
            books: this.props.books.filter(book => book.shelf === 'wantToRead')
        };
        const hasRead = {
            title: "Read",
            books: this.props.books.filter(book => book.shelf === 'read')
        };

        return ([currentRead, wantRead, hasRead])
    }

    render() {
        let shelves = [];
        if (this.props.books && this.props.books.length) {
            shelves = this.refreshShelves();
        }

        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>My Reads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {shelves && shelves.map((shelf) => (
                                <BookShelf key={shelf.title} shelf={shelf} />
                            ))}
                        </div>
                    </div>
                    <div className="open-search">
                        <a onClick={() => this.setprops({ showSearchPage: true })}>Add a book</a>
                    </div>
                </div>
            </div>
        )
    }
}
export default Library