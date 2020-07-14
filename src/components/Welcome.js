import React, { Component } from 'react'

class Welcome extends Component {
    render() {
    return <h1>Welcome {this.props.name}, I am in {this.props.training}
    {this.props.children}
    </h1>
    }
}

export default Welcome