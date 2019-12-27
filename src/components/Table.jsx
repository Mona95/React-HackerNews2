import React from "react";
import { Button } from "../Button";

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
