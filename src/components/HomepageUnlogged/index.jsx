import React from "react";
import Logo from "../Logo";
import "./HomepageUnlogged.css";
import StarPhotos from "../StarPhotos";
import CamIcon from "../../img/cam-icon.png";

function HomepageUnlogged(){

    return(
        
    <main className="main">
        <div className="container-center-horizontal">
            <div className="homepage">
                <div className="navigation">        
                    <Logo></Logo>

                    <StarPhotos {...starPhotosData}></StarPhotos>
                </div>
            </div>
        </div>
    </main>
    );
}
export default HomepageUnlogged;

const starPhotosData = {
    starphotoslink: "#",
    camiconlink:require("../../img/white-star-icon.png"),
    whitestariconlink:require("../../img/white-star-icon.png"),
};

/*

<div className="search">
<div className="search-container">
    <a
    style="text-decoration: none"
    href="homepage-search-bar.html"
    >
        <img
        className="search-icon"
        src="static/img/searchicon.png"
        alt="searchIcon"
        />
    </a>
</div>
</div>
*/