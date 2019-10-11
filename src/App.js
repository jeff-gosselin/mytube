import React from 'react';
import './App.css';

const API = 'AIzaSyBJkFA-f5xF04VkFGQMA-wQcl5nsIWJ4Ro';
const URL = `https://www.googleapis.com/youtube/v3/search?key=${API}&part=snippet&type=video&q=surf`;

function App() {
  console.log(URL);
  return (
    <div className="App">
      I am creating a YouTube app.
    </div>
  );
}

export default App;
