import React from "react";
import "./starPhotos.css";

function StarPhotos(props){
    const {
        starPhotosLink,
        camIconLink,
        whiteStarIconLink,

    }=props;
    return(
        <div className="camera">
            <a href={starPhotosLink} className="star-photos-container">
                <img
                    className="cam-icon"
                    src={camIconLink}
                    alt="camera icon"
                />
                <img
                    src={whiteStarIconLink}
                    className="star-icon"
                    alt="star icon"
                />
            </a>
        </div>
    );
}
export default StarPhotos;