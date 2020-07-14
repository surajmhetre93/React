import React from 'react'

// function Hello() {
//     return <h1>Hello I am a functional component</h1>
// }

export const Hello = (props) => (
    <h1>Hello {props.name}, I am in {props.training}
    {props.children}
    </h1>
);
// export default Hello