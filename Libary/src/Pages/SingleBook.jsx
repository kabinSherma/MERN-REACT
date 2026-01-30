import React, { useEffect, useState } from 'react'
import Layout from '../GlobalComponents/Layout/Layout'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBook = () => {
 
  const {id} = useParams()

  const [book,setBook]= useState({})
  const fetchBook = async() =>{
    const response = await axios.get("http://localhost:3000/book/"+id)
    if(response.status === 200){
      setBook(response.data.data)
    }
  }
  
  useEffect(()=>{
    fetchBook()
  },[])

  return (
    <Layout>
        
    <div className=" mt-15 p-5">
      <img className=" w-200 h-200" src={book.imageUrl} alt="Book image"/>
    
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{book.bookName}</div>
      <div className="font-bold text-xl mb-2">Rs.{book.bookPrice}</div>
      <div className=" text-xl mb-2">Auther: {book.autherName}</div>
      <div className=" text-xl mb-2">Publication Date: { book.publishedAt}</div>
      <div className=" text-xl mb-2">Publication :{book.publication} </div>
      <div className=" text-xl mb-2">ISBN Number :{book.isbnNumber} </div>
    </div>
    <div>
      <Link to= {`/Edit`}> <button className="h-10 w-60 bg-orange-400 text-white rounded cursor-pointer">Edit</button></Link>
      <Link to= {`/Edit/${id}`}> <button className="h-10 w-60 bg-blue-700 text-white rounded cursor-pointer">Delete</button></Link>
    </div>
    </div>
 


    </Layout>
  )
}

export default SingleBook