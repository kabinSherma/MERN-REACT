import React, { useEffect, useState } from 'react'
import Layout from '../GlobalComponents/Layout/Layout'
import Cards from './Components/Cards'
import axios from 'axios'
const Home = () => {
   const [book,setBook]=useState([])

  const fetchBook =async()=>{
    const response = await axios.get("http://localhost:3000/book/")
    if(response == 200){
      console.log("Book Fetched")
    }
  }

  useEffect(()=>{
    fetchBook()
  },[])

  return (
    <Layout>

      <div className='m-25 flex justify-evenly flex-wrap'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        
      </div>


    </Layout>
  )
}

export default Home