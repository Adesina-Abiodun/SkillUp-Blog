<<<<<<< HEAD
import './App.css'
import {Routes, Route} from 'react-router-dom'

=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
>>>>>>> 3aa3fa3bb7ab709fc8b964c306d1a432b3e64141

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <NavBar/>
          <Home/>
        </Route>
        <Route path='/post/:id'>
          <NavBar/>
          <Article/>
        </Route>
        <Route path='/add-post'>
          <NavBar/>
          <AddPost/>
        </Route>
        <Route path='/editor/:id'>
          <NavBar/>
          <EditorPost/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
      </Routes>
      
     
    </div>
  )
}

export default App
