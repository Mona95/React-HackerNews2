import React from "react";
import Proptypes from "prop-types";

export const Search = ({ value, onChange, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <input value={value} type="text" onChange={onChange} />
      <button type="submit">{children}</button>
    </form>
  );
};

Search.propTypes = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  children: Proptypes.node,
  onSubmit: Proptypes.func.isRequired
};
