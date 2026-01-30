import React from 'react'
import { Link} from 'react-router-dom'

const Cards = ({book}) => {
  return (
    <div className="max-w-sm rounded   shadow-lg my-10" key={book?._id}>
  <img className="w-50 h-50 " src={book?.imageUrl} alt="Book image"/>
    
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{book?.bookName}</div>
    <div className="font-bold text-xl mb-2">Rs.{book?.bookPrice}</div>
    <div className=" text-xl mb-2">Auther: {book?.autherName}</div>
    <div className=" text-xl mb-2">Publication Date: {book?.publishedAt}</div>
    <div className=" text-xl mb-2">Publication : {book?.publication}</div>
    <div className=" text-xl mb-2">ISBN Number : {book?.isbnNumber}</div>
    <Link to ={`/SingleBook/${book._id}`}><button className="h-10 w-60 bg-orange-400 text-white rounded cursor-pointer"> See More</button></Link>
  </div>
 
</div>
  )
}

export default Cards