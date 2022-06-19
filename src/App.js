import React, {useState} from "react"
import "./style/App.css"

import PostList from "./components/PostList";
function App() {

    const [posts,setPosts]=useState([
        {id:1, title:"JavaScript",body:"Description"},
        {id:1, title:"JavaScript 2",body:"Description"},
        {id:1, title:"JavaScript 3",body:"Description"},
    ])
  return (
    <div className="App">
        <PostList posts={posts}/>
    </div>
  );
}

export default App;
