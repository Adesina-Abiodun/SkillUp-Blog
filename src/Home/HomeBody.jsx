import { useEffect, useState } from "react";
import axios from 'axios';
import momemt from 'moment'
import './HomeBody.css'

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
            <h1 className="home-article-header">Latest Articles</h1>
            <div className="home-blogpost">
                {posts?.slice(0,9).map((posts) => {
                    return(
                        <div className="home-blogcontainer" key={posts._id}>
                            <div ><img className="home-articleimage" src={posts.url} alt="" /></div>
                            <p className="home-date">{moment(posts.date).startOf('hour').fromNow()}</p>
                            <h4 className="home-articletitle">{posts.title}</h4>
                            <p className="home-mainarticle">{posts.thumbnailUrl}</p>
                        </div>
                    )
                })}
            </div>
            <div className="home-btncontainer">
                <button className="homeBtn" type="submit">Load more articles</button>
            </div>
        </div>
    );
}
 
export default Home;