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
            <h1 className="header">Latest Articles</h1>
            
            <div className="blogPost">
                {posts?.slice(0,9).map((posts) => {
                    return(
                        <div className="blog-container" key={posts._id}>
                            <div ><img className="articleImage" src={posts.url} alt="" /></div>
                            <p>{moment(posts.date).format('Do MMMM YYYY, h:mm:ss a')}</p>
                            <h3>{posts.title}</h3>
                            <p>{posts.thumbnailUrl}</p>
                        </div>
                    )
                
                })}
            </div>
            <button className="homeBtn" type="submit">Load more articles</button>
        </div>
    );
}
 
export default Home;