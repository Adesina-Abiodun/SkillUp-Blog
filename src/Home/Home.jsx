import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../NavBar/NavBar";
import HomeBody from "../Home/HomeBody"
import './Home.css'
import axios from 'axios';
import Footer from "./Footer";


const blog = [{
    title: "Prepare for the future",
    body: "xyz",
    coverImage: "hhjbkbj"
}]


const Home = () => {

    const [article, setArticle] = useState([])

    useEffect(() => {
        axios.get('https://miniblogskillup.herokuapp.com')
            .then((response) => {
                console.log(response.data)
            })
    }, [])


    return (
        <div className="home-overall">
            <NavBar />

            <div className="home-banner" style={{ backgroundImage: article[0] }}>
                <h2>{article[0]}</h2>
                <p>{article[0]}</p>
                {article[0]}
            </div>

            <HomeBody />
            <Footer />

        </div>
    );
}

export default Home;