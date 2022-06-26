import React, { useContext } from "react";
import PropTypes from "prop-types";
import Buffer from "../buffer";

function TodoItem({ todo, index, onChange }) {
  const { removeTodo } = useContext(Buffer);

  const classes = [];

  if (todo.completed) {
    classes.push("todo__done");
  }

  return (
    <li className="todo__item">
      <span className={classes.join(" ")}>
        <input
          className="todo__input"
          type="checkbox"
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{index + 1}</strong>
        &nbsp;
        {todo.title}
      </span>

      <button className="todo__btm" onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
};

export default TodoItem;
