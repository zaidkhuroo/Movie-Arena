import React, { useContext } from "react";
import { AppContext } from "./context";

const Home = () => {
  const name = useContext(AppContext) //context hook to get the data from warehouse(AppProvider)
  return <>
    <div>Home is here.</div>
    <h2>{name}</h2>
  </>
};
export default Home;