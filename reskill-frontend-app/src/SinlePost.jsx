import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost(props) {
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
        <>
        <h1>Single Post id={id}</h1>
        <div>{post.title}</div>
        <img src={photo.url} alt={photo.title} />
        <div>{post.body}</div>
        </>
    );
}

export default SinglePost;