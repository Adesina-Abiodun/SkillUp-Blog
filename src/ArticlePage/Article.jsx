import React from "react";
import GabielPics from "./assets/GabielPics.svg";
import GabielImage from "./assets/GabielImage.svg";
import Image1 from "./assets/Image1.svg";
import Image2 from "./assets/Image2.svg";
import Image3 from "./assets/Image3.svg";
import "./Article.css";
import NavBar from '../NavBar/NavBar'
import { Link } from "react-router-dom";
import {useParams} from "react-router-dom"
import {useState} from "react";
const Article = () => {
  
    const {id} = useParams()
    return (
        <div>
         <NavBar />
        <div className="article">
            <div className="art-head">
                <div className="art-info">
                    <img src={GabielPics} alt="" />
                    <h3>Oluwatemi Gabiel</h3>
                    <p>posted on October 12, 2022</p>
                </div>

                <div className="share-me">
               <Link to='/Editor/:id'><button className='click'>Edit</button></Link>
                    <button className='click'>Share me</button>
                </div>
            </div>

            <div className="main">
                <img src={GabielImage} alt="" />
                <h1>
                    Ground Breaking Building is a Classic Example Architecture
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Augue pellentesque quis non natoque cursus et venenatis. Sit
                    posuere ut egestas volutpat adipiscing. Elementum ante
                    viverra dolor, a ultrices cursus. Etiam gravida turpis
                    commodo id enim a fringilla facilisis. A elit luctus
                    accumsan habitant sed faucibus egestas faucibus dictum.
                    Convallis viverra dictum non fusce sapien. Donec ut semper
                    dictum mauris. Lobortis amet, senectus interdum hendrerit
                    convallis adipiscing. Nisl ultricies vitae sem sed. Fusce
                    enim velit massa maecenas vestibulum ac non arcu, porttitor.
                    <br />
                    <br /> Tempus vitae quis at convallis magnis nulla
                    pellentesque in eu. Non, proin vestibulum adipiscing
                    ullamcorper diam tristique ultricies. Sodales urna, rutrum
                    justo, fames pellentesque morbi orci, integer. Sit eget
                    lacus at nunc amet, ante. Faucibus ut enim, elementum
                    venenatis penatibus non quam. Nisl, donec purus in cursus ut
                    eget diam proin ac. Nisl sed ultrices dictum urna neque,
                    vitae nisl. Sit amet consequat non purus nulla suspendisse
                    consectetur. Bibendum et mattis turpis ac tincidunt.
                </p>
            </div>

            {/* SIMILAR ARTICLE */}

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
                        <button className='btn'>Read More</button>
                    </div>
                    <div className="artBox">
                        <img src={Image2} alt="" />
                        <h2>How to build a successfully business in Nigeria</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Iaculis urna imperdiet netus nibh at fermentum
                            mattis. Amet adipiscing
                        </p>
                        <button className='btn'>Read More</button>
                    </div>

                    <Link to={'/post/:id'}>
                    <div className="artBox">
                        <img src={Image3} alt="" />
                        <h2>How to build a successfully business in Nigeria</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Iaculis urna imperdiet netus nibh at fermentum
                            mattis. Amet adipiscing
                        </p>
                        <button className='btn'>Read More -{id}</button>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Article;
