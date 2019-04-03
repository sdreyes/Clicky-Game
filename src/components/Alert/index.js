import React from "react"

function Alert (props) {
    if (props.status === "win") {
        return (
            <div className="alert alert-success text-center" role="alert">
                You win!
            </div>
        )
    }
    else if (props.status === "lose") {
        return (
            <div className="alert alert-danger text-center" role="alert">
                You lose!
            </div>
        )
    }
    else if (props.status === "correct") {
        return (
            <div className="alert alert-info text-center" role="alert">
                You guessed correctly!
            </div>
        );
    }
    else {
        return (
            <div className="alert alert-primary text-center" role="alert">
                Click an image to begin!
            </div>
        )
    }
}

export default Alert;