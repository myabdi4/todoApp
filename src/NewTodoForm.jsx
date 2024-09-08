import React, { useState } from "react";

const NewTodoForm = () => {
  const [newItem, setNewItem] = useState("");

  // HANDLE SUBMIT
  function handleSubmit(e) {
    e.preventDefault();
    addTodo(newItem);
    setNewItem("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit} action="" className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">ADD TODO</label>
          <input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
