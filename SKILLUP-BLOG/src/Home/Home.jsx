import NavBar from "../NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from 'axios';
import moment from 'moment';
import './Home.css'

const Home = () => {
    const [posts, setposts] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            console.log(response.data);
            setposts(response.data)
        })
    })

    return ( 
        <div>
            <NavBar/>
            {/* <div className="banner">
                
            </div> */}

            <h1 className="header">Latest Articles</h1>
            
            <div className="blogPost">
                {posts?.slice(0,9).map((posts) => {
                    return(
                        <div className="blog-container" key={posts._id}>
                            <div ><img className="articleImage" src={posts.url} alt="" /></div>
                            <p className="date">{moment(posts.date).startOf('hour').fromNow()}</p>
                            <h4 className="article-title">{posts.title}</h4>
                            <p className="main-article">{posts.thumbnailUrl}</p>
                        </div>
                    )
                })}
            </div>
            <div className="btn-container">
                <button className="homeBtn" type="submit">Load more articles</button>
            </div>
        </div>
    );
}
 
export default Home;