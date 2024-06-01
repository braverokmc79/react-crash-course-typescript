import React from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

import { useLoaderData } from "react-router-dom";

export interface PostData {
  id:string;
  author: string;
  body: string;
}

const PostsList: React.FC = () => {
  // useLoaderData의 반환 타입을 PostData[]로 지정
  const posts = useLoaderData() as PostData[];

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post key={index} id={post.id}   author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>게시글이 없습니다.</h2>
          <p>포스트를 작성해 주세요!</p>
        </div>
      )}
    </>
  );
};

export default PostsList;
