import React from "react";
import { Button } from "../Button";
import Proptypes from "prop-types";

export const Table = ({ list, onDismiss }) => {
  const largeColumn = { width: "40%" },
    midColumn = { width: "30%" },
    smallColumn = { width: "10%" };
  return (
    <div className="table">
      {list.map(item => (
        <div key={item.objectID} className="table-row">
          <span style={largeColumn}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={midColumn}> {item.author}</span>
          <span style={smallColumn}> {item.num_comments}</span>
          <span style={smallColumn}> {item.points}</span>
          <span>
            <Button
              className="button-inline"
              onClick={() => onDismiss(item.objectID)}
            >
              Dismiss
            </Button>
          </span>
        </div>
      ))}
    </div>
  );
};

Table.propTypes = {
  list: Proptypes.arrayOf(
    Proptypes.shape({
      objectID: Proptypes.string.isRequired,
      author: Proptypes.string,
      url: Proptypes.string,
      num_comments: Proptypes.number,
      points: Proptypes.number
    })
  ).isRequired,
  onDismiss: Proptypes.func.isRequired
};
