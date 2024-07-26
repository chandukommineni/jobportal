import React from "react";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchData} from "./store/dataSlice"
const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (
    <>
    <Navbar/>
    <Jobs/>

    </>
   
  )
};

export default App;
