import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const catPics = useSelector(state => state.entities);
  const loadingStatus = useSelector(state => state.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, []);


  return (
    <div>
      <h1>CatBook</h1>
      {/* add CatList component here */}
      {loadingStatus === "loading" ? <h3>Loading...</h3> : <CatList catPics={catPics}/>}
    </div>
  );
}

export default Cats;
