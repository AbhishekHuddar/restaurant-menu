import React from "react";

import { salads } from "../Data.json";

export function SsTable() {
   
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
          {salads.map(salad => (
            <tr>{salad.name}</tr>
          ))}
        </td>
        <td>
          {salads.map(salad => (
            <tr>{salad.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    
    <div  className="SsTable">
      <table>
       {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}