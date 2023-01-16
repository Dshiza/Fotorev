import React from "react";
import Search from "../Search";
import Functionality from "../Functionality";
import Personalize from "../Personalize";
import "./Navigation.css";

function Navigation(props) {
  const { className, personalizeProps } = props;

  return (
    <div className={`navigation-1 ${className || ""}`}>
      <div className="fotorev-1 lato-bold-white-25px">Fotorev.</div>
      {/*
      <Search />
      <Functionality />
      <Personalize component41Props={personalizeProps.component41Props} />
      */}
  </div>
  );
}

export default Navigation;