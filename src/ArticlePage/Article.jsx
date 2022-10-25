import React from "react";
import GabielPics from "./assets/GabielPics.svg";
import GabielImage from "./assets/GabielImage.svg";
import "./Article.css";
import NavBar from '../NavBar/NavBar'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState } from "react";
import ShowArticle from "./ShowArticle";

import moment from "moment/moment";




const Article = () => {


    const [articlePost, setArticle] = useState([])
    const {id} = useParams()


    const [modal, showModal] = useState(false)
    const popModal =()=>{
       showModal(true)
    }

    return (
        <div>
            <NavBar />
            <div className="article">
                <div className="art-head">
                    <div className="art-info">
                        <img src={GabielPics} alt="" />
                        <h3>Oluwatemi Gabiel</h3>

                        <p>posted on October 12, 2022 - {id}</p>

                        <p>posted on October 12, 2022</p>

                    </div>

                    <div className="share-me">
                        <button onClick={popModal} className='click'>Edit</button>
                        <button className='click'>Share me</button>
                    </div>
                </div>

                <div className="main">
                        { modal && <ShowArticle cancel={showModal}/> }


                        <div>

                        {articlePost?.slice(0,9).map(({_id, coverImage, createdAt, title, body}) => {
                    return(
      
                            <div key={_id}>
                                <div ><img src={coverImage} alt={title} /></div>
                                <p>{moment(createdAt).startOf('hour').fromNow()}</p>
                                <h4>{title}</h4>
                                <p>{body.slice(0,60)}....</p>
                            </div>
            
                    )
                })}

             
               
            </div>




                       
                </div>



                </div>
            </div>
        
    );
};

export default Article;
