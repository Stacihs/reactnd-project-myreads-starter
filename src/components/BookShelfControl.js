import React, { Component } from 'react'

class BookShelfControl extends Component {
     state = {
         shelfStatus: this.props.book.shelf || "none"
     }

     onSwitchShelf = (book, shelf) => {
         this.setState({shelfStatus: shelf});
         this.props.onSwitchShelf(book, shelf);
     }

     componentWillReceiveProps = (props) => {
         this.props = props;
         this.setState({shelfStatus: this.props.book.shelf});
     }

    render() {


        return (
            <div className="book-shelf-changer">
                < select value={this.state.shelfStatus} onChange={(event) => this.onSwitchShelf(this.props.book, event.target.value)}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfControl