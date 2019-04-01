import React from "react";

function Image(props) {
    return (
        <div className="col-3 pt-2 pb-2">
            <img className="img-fluid" src={props.image} alt={props.id} onClick={() => props.imageClick(props.id)} />
        </div>
    )
}

export default Image;