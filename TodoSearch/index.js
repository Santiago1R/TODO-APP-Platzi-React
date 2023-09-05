import React from "react";
import "./TodoSearch.css";
import { TodoContext } from "../TodoContext";
export function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  return (
    <input
      className="TodoSearch"
      placeholder="Corta Cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}
