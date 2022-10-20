import NavBar from "../NavBar/NavBar";
import { useForm } from "react-hook-form";
import "./AddPost.css";

const AddPost = () => {
  const { register, handleSubmit } = useForm();

  const submitData = () => {
    console.log("Success");
  };
  return (
    <div>
      <NavBar />

      <div className="Blog-article">
        <div>
          <h2>Post a new article</h2>
          <br />
          <form onSubmit={handleSubmit(submitData)}>
            <input
              type="text"
              {...register("title")}
              placeholder="Blog title"
              className="blog-title"
            />{" "}
            <br />
            <br />
            <input
              type="text"
              {...register("Image url")}
              placeholder="Image url"
              className="image-url"
            />
            <br />
            <br />
            <textarea
              cols="30"
              rows="10"
              {...register("body")}
              placeholder="Blog Content"
              className="blog-content"
            ></textarea>
            <br />
            <button type="submit" className="post">
              Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
