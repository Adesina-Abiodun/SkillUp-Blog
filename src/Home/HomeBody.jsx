import { useEffect, useState } from "react";
import axios from 'axios';
import moment from "moment/moment";
import './HomeBody.css'
import { Link } from "react-router-dom";

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
                {posts?.slice(0,9).map(({id, url, date, title}) => {
                    return(
                        <Link className='home-link' to={``}>
                            <div className="home-blogcontainer" key={id}>
                                <div ><img className="home-articleimage" src={url} alt="" /></div>
                                <p className="home-date">{moment(date).startOf('hour').fromNow()}</p>
                                <h4 className="home-articletitle">{title}</h4>
                                <p className="home-mainarticle">{title.slice(0,60)}....</p>
                            </div>
                        </Link>
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