import React from "react";

export const Search = ({ value, onChange, children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {children}
      <input value={value} type="text" onChange={onChange} />
      <button type="submit">{children}</button>
    </form>
  );
};
