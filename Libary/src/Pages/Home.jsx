import React, { useEffect, useState } from 'react'
import Layout from '../GlobalComponents/Layout/Layout'
import Cards from './Components/Cards'
import axios from 'axios'
const Home = () => {
   const [books,setBook]=useState([])

  const fetchBook =async()=>{
    const response = await axios.get("http://localhost:3000/book/")
    if(response.status === 200){
      setBook(
        response.data.data
      )
    }
  }

  useEffect(()=>{
    fetchBook()
  },[])

  return (
    <Layout>

      <div className='m-25 flex justify-evenly flex-wrap'>
        {
          books.length > 0 && books.map((book)=>{
            return (
                 <Cards book={book}/>
                )
          })
        }
        
        
      </div>


    </Layout>
  )
}

export default Home