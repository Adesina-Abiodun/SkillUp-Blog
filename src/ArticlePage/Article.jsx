import React from "react";
import GabielPics from "./assets/GabielPics.svg";
import GabielImage from "./assets/GabielImage.svg";
import Image1 from "./assets/Image1.svg";
import Image2 from "./assets/Image2.svg";
import Image3 from "./assets/Image3.svg";
import "./Article.css";
import NavBar from "../NavBar/NavBar";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShowArticle from "./ShowArticle";
import moment from "moment/moment";
import axios from "axios";

const Article = () => {
  const [articlePost, setArticle] = useState({});
  const [relatedPost, setRelatedPost] = useState([]);
  const { id } = useParams();

  const [modal, showModal] = useState(false);
  const popModal = () => {
    showModal(true);
  };

  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/" + id)
      .then((result) => {
        setArticle(result.data.data.news);
        // console.log(result.data);
      })
      .catch((err) => {
        console.error(err.response.data);
      });

    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/")
      .then((result) => {
        setRelatedPost(result.data.data.news)
      })
      .catch((err) => {
        console.error(err.response.data);
      });
  }, []);

  
  return (
    <div>
      <NavBar />
      <div className="article">
        <div className="art-head">
          <div className="art-info">
            <img src={GabielPics} alt="" />
            <h3>Oluwatemi Gabiel</h3>
            {moment(articlePost.createdAt).startOf("hour").fromNow()}
          </div>


          <div className="share-me">
            <button onClick={popModal} className="click">
              Edit
            </button>
            <button className="click">Share me</button>
          </div>
        </div>

        <div className="main">
          {modal && <ShowArticle articlePost={articlePost} cancel={showModal} />}

          <div>
            <div>
              <div>
                <img
                  src={
                    !articlePost?.coverImage?.includes("https")
                      ? "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      : articlePost?.coverImage
                  }
                  alt={articlePost.title}
                />
              </div>
              <h4>{articlePost.title}</h4>
              <p>{articlePost.body}</p>
            </div>

          </div>
                       
        </div>

        {/* SIMILAR ARTICLE */}


        <div className="similarArticle">
          <div className="sim-art">
            <hr />
            <h1>Similar Articles </h1>
            <hr />
          </div>
          <div className="commonArticle">
            {relatedPost.map((a) => {
              return (
                <div key={a._id} className="artBox">
                  <img
                    src={
                      !a.coverImage?.includes("https")
                        ? "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        : a?.coverImage
                    }
                    alt=""
                  />
                  <h2>{a.title}</h2>
                  <p>{a.body}</p>
                  <Link to={`/post/${a._id}`} className="btn1">
                    Read More
                  </Link>
                </div>
              );
            })}
            
            

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
