import React from "react";
import Proptypes from "prop-types";

export const Button = ({ onClick, className = "", children }) => {
  return (
    <button onClick={onClick} className={className} type="button">
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  children: Proptypes.node
};
