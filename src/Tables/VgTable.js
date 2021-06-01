import React from "react";

import { vegetables } from "../Data.json";

export function VgTable() {
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
          {vegetables.map(vegetable => (
            <tr>{vegetable.name}</tr>
          ))}
        </td>
        <td>
          {vegetables.map(vegetable => (
            <tr>{vegetable.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    <div className="VgTable">
      <table>
       
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}