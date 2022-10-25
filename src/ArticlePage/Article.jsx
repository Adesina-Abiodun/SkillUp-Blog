import React from "react";
import GabielPics from "./assets/GabielPics.svg";
import GabielImage from "./assets/GabielImage.svg";
import Image1 from "./assets/Image1.svg";
import Image2 from "./assets/Image2.svg";
import Image3 from "./assets/Image3.svg";
import "./Article.css";
import NavBar from '../NavBar/NavBar'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useState } from "react";
import ShowArticle from "./ShowArticle";
import moment from "moment/moment";


const Article = () => {
    const [articlePost, setArticle] = useState([])
    const { id } = useParams()

    const [modal, showModal] = useState(false)
    const popModal = () => {
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
                    {modal && <ShowArticle cancel={showModal} />}


                    <div>

                        {articlePost?.slice(0, 9).map(({ _id, coverImage, createdAt, title, body }) => {
                            return (

                                <div key={_id}>
                                    <div ><img src={coverImage} alt={title} /></div>
                                    <p>{moment(createdAt).startOf('hour').fromNow()}</p>
                                    <h4>{title}</h4>
                                    <p>{body.slice(0, 60)}....</p>
                                </div>

                            )
                        })}

                        {/* {posts?.slice(0,9).map(({_id, coverImage, createdAt, title, body}) => {
                    return(
      
                            <div key={_id}>
                                <div ><img src={coverImage} alt={title} /></div>
                                <p>{moment(createdAt).startOf('hour').fromNow()}</p>
                                <h1>{title}</h1>
                                <p>{body.slice(0,60)}....</p>
                            </div>
                    )
                })} */}
                    </div>
                </div>

                SIMILAR ARTICLE


                <div className="similarArticle">
                    <div className="sim-art">
                        <hr />
                        <h1>Similar Articles </h1>
                        <hr />
                    </div>
                    <div className="commonArticle">
                        <div className="artBox">
                            <img src={Image1} alt="" />
                            <h2>How to build a successfully business in Nigeria</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Iaculis urna imperdiet netus nibh at fermentum
                                mattis. Amet adipiscing
                            </p>
                            <button className='btn1'>Read More</button>
                        </div>
                        <div className="artBox">
                            <img src={Image2} alt="" />
                            <h2>How to build a successfully business in Nigeria</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Iaculis urna imperdiet netus nibh at fermentum
                                mattis. Amet adipiscing
                            </p>
                            <button className='btn2'>Read More</button>
                        </div>

                        <div className="artBox">
                            <img src={Image3} alt="" />
                            <h2>How to build a successfully business in Nigeria</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit. Iaculis urna imperdiet netus nibh at fermentum
                                mattis. Amet adipiscing
                            </p>
                            <button className='btn3'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Article;
