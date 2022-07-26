import "./styles.css";
import Notice from "./notice";
import Todo from "./todo";

console.clear();
export default function App() {
  return (
    <div className="App">
      <Todo />
      <hr />

      <Notice />
      <div className="footer">
        <h3>Mit viel Liebe für Maria gemacht 💙</h3>
      </div>
    </div>
  );
}
