import React, { Component } from 'react'
import BookShelfControl from './BookShelfControl'

class Book extends Component {
    state = {
        shelfStatus: this.props.book.shelf || "none"
    }

    render() {
        let url = `url(${this.props.book.imageLinks.thumbnail})`;
        
        return(
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193,
                            backgroundImage: url
                        }}>
                    </div>
                    <div>
                        <BookShelfControl book={this.props.book} onSwitchShelf={this.props.onSwitchShelf}/>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>

        )
    }
}

export default Book