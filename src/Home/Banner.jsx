import React from 'react'
import './Banner.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const blog = [{
    title: "Prepare for the future",
    body: "xyz",
    coverImage: "hhjbkbj"
}]

function Banner() {

    const [article, setArticle] = useState([])

    useEffect(()=>{
        axios.get('https://miniblogskillup.herokuapp.com')
        .then((response)=>{
            console.log(response.data)
        })
    },[])

  return (
    
    <div className='home-banner' style={{backgroundImage:article[0]}}>
        <h2>{article[0]}</h2>
        <p>{article[0]}</p>
        {article[0]}
    </div>
  );
}

export default Banner