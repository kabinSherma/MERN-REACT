import React, { useState,useEffect } from 'react'
import Layout from '../GlobalComponents/Layout/Layout'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const  Edit = () => {
  const navigate = useNavigate()
  const {id}=useParams()
 const [book,setBook] = useState({
  bookName:"",
  bookPrice:"",
  autherName:"",
  publication:"",
  publishedAt:"",
  isbnNumber:""
 })



  const [image,setImage]=useState()

  const handleChange =(e)=>{
    const {name,value}=e.target
    setBook({
      ...book,
      [name]:value
    })
  }

  const handleSubmit = async(e)=>{

    e.preventDefault()
    const formData = new FormData()
    const newDataArray = Object.entries(book)
    newDataArray.forEach(([key,value])=>{
      formData.append(key,value)
      console.log(key,value)
    })

    formData.append('image',image)
    const response = await axios.patch ('http://localhost:3000/book/' + id,formData)
    if (response.status === 200){
      alert ("Book Edited successufully")
      navigate('/book/'+id)
    }
    else {
      alert ("Something went wrong")
    }

  }
  const fetchBook = async()=>{
    const response = await axios.get ("http://localhost:3000/book/"+ id)
    if (response.status === 200){
       setBook(response.data.data)
    }
  }

  useEffect(()=>{
   fetchBook()
  },[])
  
 
  return (
    <Layout >
    <form class="max-w-sm mx-auto space-y-4 mt-25 mb-25" onSubmit={handleSubmit}>
    <div>
        <h2 className="font-bold text-orange-400 text-3xl"> Edit Book</h2>
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Book Name</label>
        <input onChange={handleChange} type="text" value ={book.bookName} id="visitors" name="bookName" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Book Price</label>
        <input onChange={handleChange} type="number" value ={book.bookPrice} id="visitors" name="bookPrice" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Auther Name</label>
        <input onChange={handleChange} type="text" id="visitors" value ={book.autherName} name="autherName" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">ISBN Number</label>
        <input onChange={handleChange} type="number" id="visitors" value ={book.isbnNumber} name="isbnNumber" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Publication</label>
        <input onChange={handleChange} type="text" id="visitors" value ={book.publication} name="publication" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Published At</label>
        <input onChange={handleChange} type="text" id="visitors" value={book.publishedAt} name="publishedAt" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Image</label>
        <input onChange={handleChange} type="file" id="visitors" name="image" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body"required />
    </div>
    <div>
        <button className="h-10 w-full bg-orange-300 text-black font-bold">Submit</button>
    </div>
    
</form>
</Layout>
  )
}

export default Edit