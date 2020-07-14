import React from 'react'

function clickHandler(){
    console.log("Clicked!")
}

function FucntionClick() {
    return (
        <div>
            <button onClick = {clickHandler}>Click</button>
        </div>
    )
}

export default FucntionClick
