import React, {useRef, useState} from "react"
import "./style/App.css"

import PostList from "./components/PostList";
import MyInput from "./components/UI/input/MyInput";
import MyButton from "./components/UI/button/MyButton";
function App() {

    const [posts,setPosts]=useState([
        {id:1, title:"JavaScript",body:"Description"},
        {id:1, title:"JavaScript 2",body:"Description"},
        {id:1, title:"JavaScript 3",body:"Description"},
    ])

    const [title,setTitle]=useState('')

    const addNewPost =(e)=>{
        e.preventDefault()
        console.log(bodyInputRef.current.value)
    }

    const bodyInputRef= useRef()

  return (
    <div className="App">
        <form>
            <MyInput value={title}  onChange={(e=>setTitle(e.target.value))}  type={"text"} placeholder={"Название"}/>
            <MyInput  ref={bodyInputRef} type={"text"} placeholder={"Описание"}/>
            <MyButton onClick ={addNewPost}>Создать</MyButton>
        </form>
        <PostList posts={posts}/>
    </div>
  );
}

export default App;
