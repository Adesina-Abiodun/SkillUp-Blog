import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Article from "./ArticlePage/Article";
import AddPost from "./AddPostPage/AddPost";
import EditorPost from "./EditorPage/EditorPost";
import Login from "./LoginPage/Login";
import Register from "./RegisterPage/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post/:id' element={<Article/>}/>
        <Route path='/add-post' element={<AddPost/>}/>
        <Route path='/editor/:id' element={<EditorPost/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes> 
    </div>
  );
}

export default App;
