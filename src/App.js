import "./styles.css";
import Notice from "./notice";
import Todo from "./todo";
import styled from "styled-components";
import { Route, Routes, NavLink } from "react-router-dom";

console.clear();
export default function App() {
  return (
    <div className="App">
      <nav className="NavBar">
        <LinkButton to="/">Einkaufsliste</LinkButton>
        <LinkButton to="/notizen">Notizen</LinkButton>
      </nav>
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/notizen" element={<Notice />} />
      </Routes>
    </div>
  );
}
const LinkButton = styled(NavLink)`
  padding: 4px 12px;
  border: 1px solid #bbb;
  border-radius: 4px;
  background-color: #ff5555;
  text-decoration: none;
  color: #fff;
  &.active {
    background-color: #50fa7b;
    color: #44475a;
  }
`;
