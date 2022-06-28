import React, { useState } from "react";

function App() {
    const isGoingOut = true;

    const [value, setValue] = useState(isGoingOut);

    function func() {
        setValue((value) => !value);
    }

    return (
        <div className="container">
            <h1> Do i feel like going out tonight? </h1>
            <div className="button" onClick={func}>
                <span className="--btn-text">{value ? "YES" : "NO"}</span>
            </div>
        </div>
    );
}

export default App;
