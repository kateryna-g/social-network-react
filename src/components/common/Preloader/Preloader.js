import preloader from "../../../assets/images/load.svg";
import React from "react";


let Preloader = (props) => {
    return (
        <div style={ { backgroundColor: "white"} }>
            <img src={preloader} />
        </div>
    )
}




export default Preloader;
