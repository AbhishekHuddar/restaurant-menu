import React from "react";

import { meatnpoultry } from "../Data.json";

export function MpTable() {
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
          {meatnpoultry.map(meatnp => (
            <tr>{meatnp.name}</tr>
          ))}
        </td>
        <td>
          {meatnpoultry.map(meatnp => (
            <tr>{meatnp.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    <div className="MpTable">
      <table>
       
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}