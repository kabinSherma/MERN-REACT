import React from 'react'
import Layout from '../../GlobalComponents/Layout/Layout'

const Form = ({types}) => {


  return (
    <Layout >
    <body class="bg-gray-100 flex items-center justify-center min-h-screen mt-15">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center"> { types == "Edit"? "Edit":"Add"} a Book</h2>
        <form action="#" method="POST" className="space-y-4" >
          
            <div>
                <label for="book_name" className="block text-sm font-medium text-gray-700">Book Name</label>
                <input type="text" id="book_name" name="bookName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div>
                <label for="book_price" className="block text-sm font-medium text-gray-700">Book Price</label>
                <input type="text" id="book_price" name="bookPrice" step="0.01" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div>
                <label for="isbn" className="block text-sm font-medium text-gray-700">ISBN Number</label>
                <input type="text" id="isbn" name="isbnNumber" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div>
                <label for="author_name" className="block text-sm font-medium text-gray-700">Author Name</label>
                <input  type="text" id="author_name" name="authorName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div>
                <label for="published_at" className="block text-sm font-medium text-gray-700">Published At</label>
                <input  type="date" id="published_at" name="publishedAt" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div>
                <label for="publication" className="block text-sm font-medium text-gray-700">Publication</label>
                <input  type="text" id="publication" name="publication" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
            </div>

            <div>
                <label for="image" className="block text-sm font-medium text-gray-700">Image</label>
                <input  type="file" id="image" name="image" accept="image/png,jpg,jpge" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            <div className="text-center">
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">{types == "Edit"? "Edit":"Add"} Book</button>
            </div>
        </form>
    </div>
</body>

 </Layout>
  )
}

export default Form