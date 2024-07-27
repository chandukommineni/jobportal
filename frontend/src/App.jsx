import React from "react";
import Navbar from "./components/Navbar";
import Jobs from "./components/Jobs";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {fetchData} from "./store/dataSlice"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchData())
  },[])
  return (
    <>
    <ToastContainer position="top-center" />
    <Navbar/>
    <Jobs/>

    </>
   
  )
};

export default App;
