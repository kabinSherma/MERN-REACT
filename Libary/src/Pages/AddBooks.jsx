import React from 'react'
import { data, useNavigate } from 'react-router'
import Form from  './Components/Form'
import axios from 'axios'


const AddBooks = () => {

  const navigate =useNavigate()
  const handleSubmit =async(book,image)=>{

    const formData = new FormData()
    // console.log( book)
    const bookArray=Object.entries(book)
    bookArray.forEach(([key,value])=>{
      formData.append(key,value)
    })

    formData.append('image',image)

    const response =await axios.post ("http://localhost:3000/book",formData)
    if(response.status === 201){
     alert ("Book added successfully") 
     navigate('/')
    }
    else {
      alert("Something went wrong")
    }
    



  }
 
  return (
    < Form  types={"Add"} submit= {handleSubmit}/>
  )
}

export default AddBooks