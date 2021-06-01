import React from "react";

import { ceviches } from "../Data.json";

export function CvTable() {
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
          {ceviches.map(ceviche => (
            <tr>{ceviche.name}</tr>
          ))}
        </td>
        <td>
          {ceviches.map(ceviche => (
            <tr>{ceviche.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    <div className="CvTable">
      <table>
       
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}