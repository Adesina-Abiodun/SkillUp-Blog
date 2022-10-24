import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    axios
      .get("https://miniblogskillup.herokuapp.com/api/posts/")
      .then((response) => {
        console.log(response.data);
        setposts(response.data.data.news);
      });
  }, []);

  return (
    <div className="Article">
      {/* SIMILAR ARTICLE */}

      <div className="similarArticle">
        <div className="sim-art">
          <hr />
          <h1>Articles </h1>
          <hr />
        </div>

        <div className="CommonArticle">
          {posts
            ?.slice(0, 9)
            .map(({ _id, coverImage, createdAt, title, body }) => {
              return (
                <div className="ArtBox">
                  <img src={coverImage} alt={title} />
                  <h2>{title}</h2>
                  <p>{body.slice(0, 60)}....</p>
                  <Link to={`posts/${_id}`}>Read More</Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Articles;
