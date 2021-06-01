import React from "react";

import { sideorders } from "../Data.json";

export function SoTable() {
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
          {sideorders.map(sideorder => (
            <tr>{sideorder.name}</tr>
          ))}
        </td>
        <td>
          {sideorders.map(sideorder => (
            <tr>{sideorder.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    <div className="SoTable">
      <table>
       
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}