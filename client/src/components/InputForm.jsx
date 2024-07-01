import { useEffect, useState } from "react";
import "../components/InputForm.css";
import { DeleteBtn } from "./DeleteBtn";
import { AddBtn } from "./AddBtn";
import { TodoItem } from "./TodoItem";

export const InputForm = () => {
  // HANDLE USER CHANGE
  const [userInput, setUserInput] = useState("");
  const [items, setItem] = useState("");

  //HANDLE INPUT ARRAY
  const [todoItems, setTodoItems] = useState([]);

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setItem(userInput);
    setTodoItems([...todoItems, userInput]);
    setUserInput(" ");
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <input
            type="text"
            value={userInput}
            className="input-form"
            onChange={handleInput}
            placeholder="Write Your Todos Here!"
          />
          <span> </span>
          <AddBtn handleClick={handleClick} />
          <span> </span>
          <div className="userItems">
            <h3>YOUR TODOS</h3>
            <TodoItem todoItems={todoItems} />
          </div>
        </div>
        <DeleteBtn todoItems={todoItems} />
      </form>
    </div>
  );
};
