import React, { Component } from 'react'
import './stylesheet.css'

export class Lifecycle extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             color : "red",
        };
    }

    // static getDerivedStateFromProps(props, state) {
    //     return {
    //         color : props.favcolor
    //     };
    // }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                {
                    color:"blue"
                }
            );
        }, 3000);
    }

    // shouldComponentUpdate(){
    //     return false;
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById('div1').innerHTML = "<p>Before updating: "+ prevState.color + "</p>";
    }

    changeColor(){
        this.setState({
            color : "rainbow"
        }
        );
    }

    render() {
        return (
            <div>
                <div id="div1"></div>
                <h1 className={this.state.color}>This color is  {this.state.color}</h1>
                <button onClick={() => this.changeColor()}>Change Color</button>
            </div>
        )
    }
}

export default Lifecycle
