import { useState, useEffect } from 'react'
import './App.scss'

function App() {
  const [posts, setPosts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(data => setPhotos(data));
  }, []);


  return (
    <>
    <div className="banner">
      <div className="site-name">Site Name</div>
      <div className="tabs">
        <div>Tab 1</div>
        <div>Tab 2</div>
        <div>Tab 3</div>
      </div>
      <button className="search-button">Button</button>
    </div>
    <div className="title">
      <h1>Posts List</h1>
    </div>
      <div className="card">
        <p>
         {posts[0] && <div>{posts[0].title}</div>} 
        </p>
      </div>
      {photos[0] && <img className="centered-image" src={photos[0].url} alt={photos[0].title} />} 
    <div className="image-body">
      {posts[0] && <div>{posts[0].body}</div>} 
    </div>
    <div className="grid">
      {photos.slice(1, 10).map((photo, index) => (
        <div className="grid-item" key={index}>
          <img src={photo.url} alt={photo.title} />
          <div>{posts[index + 1] && posts[index + 1].title}</div>
        </div>
      ))}
    </div>
    
    
    </>
  )
}

export default App
