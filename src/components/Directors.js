import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map((directors)=> <div key={directors.name}>
      {directors.name}<ul>{directors.movies.map((value)=> <li key={value}>{value}</li>)}</ul></div>)}
  </div>;
}

export default Directors;
