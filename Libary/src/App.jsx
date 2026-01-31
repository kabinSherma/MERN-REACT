import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Books from './Pages/Books'
import SingleBook from './Pages/SingleBook'
import Edit from './Pages/Edit'
import AddBooks from './Pages/AddBooks'
import NavBar from './NavBar/NavBar'

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route  path='/' element = {<Home /> } />
      <Route path ='/Books' element = {<Books />} />
      <Route path = '/SingleBook/:id' element ={ <SingleBook />} />
      <Route path = '/AddBooks' element = {<AddBooks /> } />
      <Route path = '/Edit/:id' element = { <Edit/>} />
      <Route path = '/Navbar' element = { <NavBar /> } />
    </Routes>
   </BrowserRouter>
  )
}

export default App