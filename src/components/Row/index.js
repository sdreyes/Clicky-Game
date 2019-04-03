import React from "react";

function Row(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-lg-9 col-sm-12">
                <div className="row">{props.children}</div>
            </div>
        </div>
    )
}

export default Row;