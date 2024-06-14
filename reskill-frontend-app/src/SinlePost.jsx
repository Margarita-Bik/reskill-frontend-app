import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then((response) => response.json())
          .then((data) => setPost(data));
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
          .then((response) => response.json())
          .then((data) => setPhoto(data));
      }, []);

    return (
      <div className="post-page">
        <div className="text">
          <h1>About</h1>
          <div>{post.title}</div>
          <div>{post.body}</div>
        </div>
        <div className="image">
          <img src={photo.url} alt={photo.title} />
        </div>
      </div>
    );
}

export default SinglePost;