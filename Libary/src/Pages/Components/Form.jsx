import React, { useState } from 'react'
import Layout from '../../GlobalComponents/Layout/Layout'

const Form = ({types,submit}) => {


    const [book,setBook] = useState({
        bookName:"",
        bookPrice:"",
        autherName:'',
        publishedAt:'',
        publication:'',
        
        isbnNumber:""
    })

    const [image,setImage] = useState(null)

    const handleChange = (e)=>{
        const {name,value}=e.target
        setBook ( {
            ...book,
            [name] : value 
         })
        
    }
    



    const handleSubmit =(e)=>{
        e.preventDefault()
        submit(book,image)
    }

  return (
    <Layout >
    
<form class="max-w-sm mx-auto space-y-4 mt-25 mb-25" onSubmit={handleSubmit}>
    <div>
        <h2 className="font-bold text-orange-400 text-3xl"> { types === "Add"? "Add" : "Edit"} Book</h2>
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Book Name</label>
        <input onChange={handleChange} type="text" id="visitors" name="bookName" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Book Price</label>
        <input onChange={handleChange} type="text" id="visitors" name="bookPrice" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Auther Name</label>
        <input onChange={handleChange} type="text" id="visitors" name="autherName" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">ISBN Number</label>
        <input onChange={handleChange} type="text" id="visitors" name="isbnNumber" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Publication</label>
        <input onChange={handleChange} type="text" id="visitors" name="publication" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
    </div>
    <div>
        <label for="visitors" class="block mb-2.5 text-sm font-medium text-heading">Published At</label>
        <input onChange={handleChange} type="date" id="visitors" name="publishedAt" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-2.5 py-2 shadow-xs placeholder:text-body" placeholder="" required />
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

export default Form