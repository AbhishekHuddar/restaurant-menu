import React from "react";

import { desserts } from "../Data.json";

export function DsTable() {
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
          {desserts.map(dessert => (
            <tr>{dessert.name}</tr>
          ))}
        </td>
        <td>
          {desserts.map(dessert => (
            <tr>{dessert.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    <div className="DsTable">
      <table>
       
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}