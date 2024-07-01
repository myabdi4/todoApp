import { InputForm } from "./components/InputForm";
import { Profile } from "./user/Profile";
import "./App.css"

function App() {
  return (
    <div className=".mainCard">
      <h2>MY TODOS</h2>
      <InputForm />
      <Profile />
    </div>
  );
}

export default App;
