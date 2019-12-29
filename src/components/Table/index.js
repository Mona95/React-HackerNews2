import React from "react";
import { Button } from "../Button";
import Proptypes from "prop-types";
import { sortBy } from "lodash";

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, "title"),
  AUTHOR: list => sortBy(list, "author"),
  COMMENTS: list => sortBy(list, "num_comments").reverse(),
  POINTS: list => sortBy(list, "points").reverse()
};

const Sort = ({ sortKey, onSort, children, activeSort }) => {
  const sortClass = ["button-inline"];
  if (sortKey === activeSort) {
    sortClass.push("button-active");
  }
  return (
    <Button onClick={() => onSort(sortKey)} className={sortClass.join("")}>
      {children}
    </Button>
  );
};

export class Table extends React.Component {
  state = {
    sortKey: "NONE",
    isSortReverse: false
  };

  onSort = sortKey => {
    const isSortReverse =
      this.state.sortKey === sortKey && !this.state.isSortReverse;
    this.setState({ sortKey, isSortReverse });
  };

  render() {
    const largeColumn = { width: "40%" },
      midColumn = { width: "30%" },
      smallColumn = { width: "10%" };
    const { sortKey, isSortReverse } = this.state;
    const { list, onDismiss } = this.props;
    const sortedList = SORTS[sortKey](list);
    const reversedList = isSortReverse ? sortedList.reverse() : sortedList;
    return (
      <div className="table">
        <div className="table-header">
          <span style={largeColumn}>
            <Sort activeSort={sortKey} sortKey={"TITLE"} onSort={this.onSort}>
              Title
            </Sort>
          </span>
          <span style={midColumn}>
            <Sort activeSort={sortKey} sortKey={"AUTHOR"} onSort={this.onSort}>
              Author
            </Sort>
          </span>
          <span style={smallColumn}>
            <Sort
              activeSort={sortKey}
              sortKey={"COMMENTS"}
              onSort={this.onSort}
            >
              Comments
            </Sort>
          </span>
          <span style={smallColumn}>
            <Sort activeSort={sortKey} sortKey={"POINTS"} onSort={this.onSort}>
              Points
            </Sort>
          </span>
          <span style={smallColumn}>Archive</span>
        </div>
        {reversedList.map(item => (
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
  }
}

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
