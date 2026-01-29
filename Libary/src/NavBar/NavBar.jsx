import React from 'react'
import {Link }from 'react-router-dom'

const NavBar = () => {
  return (
    


<nav class="bg-orange-400 fixed w-full z-20 top-0 start-0  border-default">
  <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
       
        <span class="text-white self-center text-xl text-heading font-semibold whitespace-nowrap">BookStore</span>
    </Link>
  < Link to = "/AddBooks">
  
    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button type="button" class="text-white bg-blue-700 hover:bg-brand-strong box-border border border-transparent cursor-pointer shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2  rounded">Add Book</button>
        <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary" aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
    </div>
  
  
  </Link>
    
  </div>
</nav>


  )
}

export default NavBar