import React, { useEffect, useState } from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";
import { API_BASE_URL } from './../api-config';

interface PostListProps {
  isPosting: boolean;
  onStopPosting: () => void;
}

export interface PostData {
  author: string;
  body: string;
}


const PostsList: React.FC<PostListProps> = (props) => {
 
  const [posts, setPosts] = useState<PostData[]>([]);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(API_BASE_URL + "/posts");
        if (!response.ok) throw new Error("Failed to fetch posts.");}
        const data = await response.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("게시글을 가져오지 못했습니다. ",error);
      }
    };

    fetchPosts();
  }, []);


  const addPostHandler = (postData: PostData) => {
    fetch(API_BASE_URL+'/posts',{
        method: 'POST',
        body: JSON.stringify(postData),
        headers:{
          'Content-Type':'application/json; charset=utf-8'
        }
    });

    setPosts((existingPosts)=>[postData, ...existingPosts]);
  };

  let modalContent;
  if (props.isPosting) {
    modalContent = (
      <Modal onClose={props.onStopPosting}>
        <NewPost onCancel={props.onStopPosting} onAddPost={addPostHandler} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}

       {posts.length>0 &&
          <ul className={classes.posts}>
            {posts.map((post, index) => (<Post key={index} author={post.author} body={post.body} />))}
          </ul>
        }
        {posts.length ===0 && 
          <div style={{textAlign:"center", color:'white'}}>
              <h2>게시글이 없습니다.</h2>
              <p>포스트를 작성해 주세요!</p>
          </div>
        }
    </>
  );
};

export default PostsList;
