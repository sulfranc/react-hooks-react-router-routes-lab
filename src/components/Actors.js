import React from "react";
import { actors } from "../data";

function Actors() {
  return <div><h1>Actors Page</h1>
  {actors.map((actors)=> <div key={actors.name}>
    {actors.name}<ul>{actors.movies.map((value)=> <li key={value}>{value}</li>)}</ul></div>)}</div>;
}

export default Actors;
