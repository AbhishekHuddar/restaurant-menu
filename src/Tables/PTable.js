import React from "react";

import { paellas } from "../Data.json";

export function PTable() {
  function renderHead() {
    return (
      <thead>
        <td><th>Name</th></td>
        <td><th>Description</th></td>
      </thead>
    );
  }

  function renderBody() {
    return (
      <tbody>
        <td>
          {paellas.map(paella => (
            <tr>{paella.name}</tr>
          ))}
        </td>
        <td>
          {paellas.map(paella => (
            <tr>{paella.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    <div className="PTable">
      <table>
       
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}