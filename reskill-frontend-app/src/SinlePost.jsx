import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
      axios.get(`http://127.0.0.1:3000/posts/${id}`)
        .then(response => {
          setPost(response.data);
        });
    
      axios.get(`http://127.0.0.1:3000/photos/${id}`)
        .then(response => {
          setPhoto(response.data);
        });
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