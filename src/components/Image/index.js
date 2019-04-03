import React from "react";

function Image(props) {
    return (
        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-4 col-4 pt-2 pb-2">
            <img className={props.status === "lose" ? "shake img-fluid" : "img-fluid"} src={props.image} alt={props.id} onClick={() => props.imageClick(props.id)} />
        </div>
    )
}

export default Image;