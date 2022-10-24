import "./editorsProfile.css";
// import {Link} from 'react-router-dom'
import EditorModal from "./EditorModal";
import { useState } from 'react';
import React from "react";

function EditorProfile() {

  const [openModal, setOpenModal] = useState(false);
  console.log(openModal)

  return (
    <div>
       {openModal && <EditorModal setOpenModal={setOpenModal} />}
      <div className="editorProfile-container-bg">
        <div className="editorProfile-container-sm">
          <section className="editorProfile-section1">
            <div className="editorProfile-profileDiv">
              <div className="editorProfile-pictureDiv"></div>
              <div className="editorProfile-uppertextDiv">
                <h1 className="editorProfile-nameText">Oluwatemi Gabiel</h1>
                <p className="editorProfile-textChild">
                  Oluwatemi Gabiel is the Marketing and Social Media Manager for
                  Skillup Africa. He writes about technology, internet culture,
                  and publishes our weekly How I Work series. Reach Oluwatemi on
                  Twitter @oluatemisam or send him an email:
                  gabiel@skillup.africa
                </p>
                <div className="editorProfile-refsDivs">
                  <a href="#" className="editorProfile-href1">
                    120 Articles Posted
                  </a>
               
                  <button className="btnEditpro" onClick={() => setOpenModal(true) }>EditProfile</button>
                  
                
                  <a href="#" className="editorProfile-href2">
                    Add Post
                  </a>
                </div>
               
              </div>
            </div>
          </section>
          <div className="editorProfile-intro">
            <div className="editorProfile-vectorLine"></div>
            <h3 className="editorProfile-articleIntro">
              Articles from Oluwatemi Gabiel
            </h3>
            <div className="editorProfile-vectorLine"></div>
            <section section="editorProfile-section2">
              <div className="editorProfile-grayBox"></div>
              <div className="editorProfile-div12mins"> 12 min ago</div>
              <div className="editorProfile-text2">
                <h2>How to Write a Headline for Your Blog Post </h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
                  ab voluptatibus quis animi aliquam odio aliquid. At in
                  accusamus consectetur laudantium placeat eos voluptas tempora
                  cupiditate, incidunt magnam, consequuntur adipisci.
                </p>
              </div>
              <div className="editorProfile-vectorLine3"></div>
            </section>
            <section className="editorProfile-cardSection">
              <div className="editorProfile-cards">
                <div className="editorProfile-card1Div">
                  <div className="editorProfile-cardBg"></div>
                  <div className="editorProfile-cardText">
                    <h3>How to build a successfull business in Nigeria </h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate consequatur earum beatae ullam sint quam
                      incidunt ad dolor, nam quo.
                    </p>
                    <button className="editorProfile-readMoreBtn">
                      Read more
                    </button>
                  </div>
                </div>
                <div className="editorProfile-card1Div">
                  <div className="editorProfile-cardBg"></div>
                  <div className="editorProfile-cardText">
                    <h3>How to build a successfull business in Nigeria </h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate consequatur earum beatae ullam sint quam
                      incidunt ad dolor, nam quo.
                    </p>
                    <button className="editorProfile-readMoreBtn">
                      Read more
                    </button>
                  </div>
                </div>
                <div className="editorProfile-card1Div">
                  <div className="editorProfile-cardBg"></div>
                  <div className="editorProfile-cardText">
                    <h3>How to build a successfull business in Nigeria </h3>
                    <p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Voluptate consequatur earum beatae ullam sint quam
                      incidunt ad dolor, nam quo.
                    </p>
                    <button className="editorProfile-readMoreBtn">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <div className="editorProfile-cards2">
                <div className="editorProfile-card2Div">
                  <div className="editorProfile-cardBg"></div>
                  <div className="editorProfile-cardText">
                    <h3>How to build a successfull business in Nigeria </h3>

                    <button className="editorProfile-readMoreBtn">
                      Read more
                    </button>
                  </div>
                </div>
                <div className="editorProfile-card1Div">
                  <div className="editorProfile-cardBg"></div>
                  <div className="editorProfile-cardText">
                    <h3>How to build a successfull business in Nigeria </h3>

                    <button className="editorProfile-readMoreBtn">
                      Read more
                    </button>
                  </div>
                </div>
                <div className="editorProfile-card1Div">
                  <div className="editorProfile-cardBg"></div>
                  <div className="editorProfile-cardText">
                    <h3>How to build a successfull business in Nigeria </h3>

                    <button className="editorProfile-readMoreBtn">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorProfile;
