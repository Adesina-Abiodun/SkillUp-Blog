import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";
import "./HomeBody.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setposts] = useState([]);
  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/")
      .then((response) => {
        console.log(response.data);
        setposts(response.data.data.news.reverse(a => a));

      });
  }, []);

  return (
    <div>
      <h1 className="home-article-header">Latest Articles</h1>
      <div className="home-blogpost">
        {posts
          ?.slice(0, 9)
          .map(({ _id, coverImage, createdAt, title, body }) => {
            return (
              <Link className="home-link" to={`post/${_id}`} key={_id}>
                <div className="home-blogcontainer" key={_id}>
                  <div>
                    <img
                      className="home-articleimage"
                      src={
                        !coverImage.includes("https")
                          ? "https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          : coverImage
                      }
                      alt={title}
                    />
                  </div>
                  <p className="home-date">
                    {moment(createdAt).startOf("hour").fromNow()}
                  </p>
                  <h4 className="home-articletitle">{title}</h4>
                  <p className="home-mainarticle">{body.slice(0, 60)}....</p>
                </div>
              </Link>
            );
          })}
      </div>
      <div className="home-btncontainer">
        <button className="homeBtn" type="submit">
          Load more articles
        </button>
      </div>
    </div>
  );
};

export default Home;
