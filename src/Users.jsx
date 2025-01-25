import axios from 'axios'
import React, { useEffect } from 'react'

function Users() {
const getData =async ()=>{
  const {data}= await axios.get(`${import.meta.env.VITE_USER}`);
  console.log(data)
}


  useEffect(()=>{
    getData();
   
  },[])
  return (
    <>
    <p>55</p>
    </>
  )
}

export default Users