import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { saveToLocalStorage, loadFromLocalStorage } from "./LocalStorage";
import "./styles.css";

export default function Todo() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(loadFromLocalStorage("My Todos") ?? []);

  useEffect(() => {
    saveToLocalStorage("My Todos", todos);
  });

  return (
    <div className="todoWrap">
      <h2 className="title">Maria's Einkaufsliste</h2>
      <form
        className="form"
        autoComplete="off"
        htmlFor="todo"
        onSubmit={(event) => {
          event.preventDefault();
          setTodos([...todos, { name: inputValue, id: nanoid() }]);
          setInputValue("");
        }}
      >
        <input
          required
          type="text"
          id="todo"
          value={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />

        <button className="addButton">Add</button>
      </form>
      <ul className="todoUl">
        {todos.map((todo) => {
          return (
            <>
              <li className="todoLi" key={todo.id}>
                {todo.name}
                <button
                  key={todo.id}
                  type="button"
                  className="deleteButton"
                  onClick={() => {
                    setTodos(todos.filter((Item) => Item.id !== todo.id));
                  }}
                >
                  Delete
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
