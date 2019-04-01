import React from "react";

function Nav(props) {
    return (
        <nav className="navbar sticky-top navbar-dark bg-primary d-flex justify-content-around">
            <h3>
                Clicky Game
            </h3>
            <h3>
                
            </h3>
            <h3>
                Score: {props.score} | Top Score: {props.topScore}
            </h3>
        </nav>
    )
}

export default Nav;