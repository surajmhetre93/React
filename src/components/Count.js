import React, { Component } from 'react'

export class Count extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             value : 0,
        }
    }

    incrementCount(){
        this.setState({
            value : this.state.value + 1,
        },
        () => {
            console.log("callback function", this.state.value)
        })
        console.log(this.state.value);
    }

    decrementCount(){
        this.setState({
            value : this.state.value - 1,
        })
        console.log(this.state.value);
    }

    render() {
        return (
            <div>
                <h1>Count : {this.state.value}</h1>
                <button onClick={() => this.incrementCount()}>Increment</button>
                <button onClick={() => this.decrementCount()}>Decrement</button>
            </div>
        )
    }
}

export default Count
