import './App.css'
import {Routes, Route} from 'react-router-dom'


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
