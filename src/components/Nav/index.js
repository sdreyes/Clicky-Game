import React from "react";

function Nav(props) {
    return (
        <nav className="navbar sticky-top navbar-dark bg-info d-flex justify-content-around">
            <h3>
                Score: {props.score} | Top Score: {props.topScore}
            </h3>
        </nav>
    )
}

export default Nav;