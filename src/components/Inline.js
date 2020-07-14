import React from 'react'

function Inline() {
    const heading = {
        fontsize : "72px",
        color : "red",
    };
    return (
        <div>
            <h1 className={heading}>Inline Style</h1>
        </div>
    );
}

export default Inline;
