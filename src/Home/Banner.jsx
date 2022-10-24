import React from "react";
import "./Banner.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const blog = [
  {
    title: "Prepare for the future",
    body: "xyz",
    coverImage: "hhjbkbj",
  },
];

function Banner() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/")
      .then((response) => {
        setArticle(response.data.data.news);
        console.log(response.data.data.news);
      });
  }, []);

  return (
    // <></>
    <div
      className="home-banner"
      style={{ backgroundImage: article[0].coverImage  || ""}}
    >
      <h2>{article[0].title}</h2>
      <p>{article[0].body.slice(0,60)}</p>
      <Link to={`post/${article[0]._id}`}>Read More</Link>
    </div>
  );
}

export default Banner;
