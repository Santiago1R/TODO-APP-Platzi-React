import React from "react";
import "./TodosLoading.css";
export function TodosLoading() {
  return (
    <>
      <div className="content-loading">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
