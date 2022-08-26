// import { React } from 'react'
import '../Navbar/navbar.css'
import React, { PropTypes } from 'react';
// import * as quotes from '../../quotes.json'
import axios from 'axios'


class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
      let randomNum =  Math.floor(Math.random() * (102))
      console.log(randomNum)
        this.setState({
       name: this.state.myQuotes[randomNum].quote
        });
        // try console logging myQuotes from your state
        console.log(this.state.myQuotes[0].quote);
    }
    componentDidMount() {
        let app = this
        axios.get('./quotes.json')
            .then(function (response) {
                // handle success
                console.log(response.data.quotes);
                app.setState({
                    myQuotes: response.data.quotes
                })
            })
            
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Random Quotes =)</button>
                <h1 id="quotes">{this.state.name}</h1>
                
                {/* {this.state.name} */}
            </div>
        );
    }
};


export default MyComponent;
