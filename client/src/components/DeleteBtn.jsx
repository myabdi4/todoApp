import "../components/InputForm.css";
// import ClearIcon from "@mui/icons-material/Clear";

export const DeleteBtn = (todoItems) => {
  return (
    <div className="delBtnHolder">
      {" "}
      <button className="deleteBtn" onClick={() => todoItems[" "]}>
        clear all
      </button>
      
    </div>
  );
};
