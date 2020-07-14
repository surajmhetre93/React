import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super();
        this.state={
            message : "Welcome",
            name : "Chinmay",
            training : "Data Engineering"
        };
    }

    changeMessage() {
        this.setState({
            message : "Thanks for subscribing!",
            name : "",
            training : "",
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.message} {this.state.name}, Let's start {this.state.training} training for you</p>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        );
    }
}

export default Message