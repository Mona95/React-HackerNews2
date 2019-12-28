import React from "react";
import Proptypes from "prop-types";

export class Search extends React.Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }
  render() {
    const { value, onChange, children, onSubmit } = this.props;
    return (
      <form onSubmit={onSubmit}>
        {children}
        <input
          value={value}
          type="text"
          ref={el => (this.input = el)}
          onChange={onChange}
        />
        <button type="submit">{children}</button>
      </form>
    );
  }
}

Search.propTypes = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  children: Proptypes.node,
  onSubmit: Proptypes.func.isRequired
};
