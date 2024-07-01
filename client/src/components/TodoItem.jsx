import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Clear";

export const TodoItem = (props) => {
  const { todoItems } = props;
  return (
    <div>
      <ul>
        {todoItems.map((item, key) =>
          item.trim() === "" ? null : (
            <li key={key}>
              <div>
                {item}
                <DeleteIcon className="deleteIcon" />
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
