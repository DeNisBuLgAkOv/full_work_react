import React from 'react';
import PostItem from "../components/PostItem";
import MyButton from "./UI/button/MyButton";

const PostList = ({posts}) => {
    return (
        <div className="App">
            <form>
                <input  type={"text"} placeholder={"Название"}/>
                <input  type={"text"} placeholder={"Описание"}/>
                <MyButton>Создать</MyButton>
            </form>

            <h1 style={{textAlign: "center"}}>Список постов</h1>
            {posts.map(post => <PostItem key={post.id} post={post}/>)}

        </div>
    );
};

export default PostList;