import React from "react";

import { seafoods } from "../Data.json";

export function SfTable() {
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
          {seafoods.map(seafood => (
            <tr>{seafood.name}</tr>
          ))}
        </td>
        <td>
          {seafoods.map(seafood => (
            <tr>{seafood.description}</tr>
          ))}
        </td>
      </tbody>
    );
  }



  return (
    <div className="SfTable">
      <table>
       
        {renderHead()}
        {renderBody()}
      </table>
    </div>
  );
}