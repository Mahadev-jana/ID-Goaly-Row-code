import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const index = () => {
  const { search } = useLocation();

  const query = new URLSearchParams(search);

  var q = query.get("debug");

  // useEffect(() => {
  //     alert("Debugging flag is " + q);
  // },[])

  return <div>version 2.3.7</div>;
};


export default index;
