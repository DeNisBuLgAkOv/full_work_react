import React from 'react';
import PostItem from "../components/PostItem";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostList = ({posts}) => {



    return (
        <div >
            <h1 style={{textAlign: "center"}}>Список постов</h1>
            {posts.map(post => <PostItem key={post.id} post={post}/>)}

        </div>
    );
};

export default PostList;