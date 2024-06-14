import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

function Home() {
    const [posts, setPosts] = useState([]);
    const [photos, setPhotos] = useState([]);
  
    useEffect(() => {
      axios.get('http://127.0.0.1:3000/posts')
        .then(response => {
          setPosts(response.data);
        });
    
      axios.get('http://127.0.0.1:3000/photos')
        .then(response => {
          setPhotos(response.data);
        });
    }, []);
  

  return (
    <>
      <div className="title">
        <h1>Posts List</h1>
      </div>
      <div className="card">
        <p>{posts[0] && <span>{posts[0].title}</span>}</p>
      </div>
      {photos[0] && (
        <img
          className="centered-image"
          src={photos[0].url}
          alt={photos[0].title}
        />
      )}
      <div className="image-body">{posts[0] && <div>{posts[0].body}</div>}</div>
      <div className="random-images">
        {photos[11] && <img src={photos[1].url} alt={photos[11].title} />}
        {photos[12] && <img src={photos[2].url} alt={photos[12].title} />}
      </div>
      <div className="grid">
        {photos.slice(1, 10).map((photo, index) => (
          <div className="grid-item" key={index}>
            <Link to={`/post/${photo.id}`}>
            <img src={photo.url} alt={photo.title} />
            <div>{posts[index + 1] && posts[index + 1].title}</div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;