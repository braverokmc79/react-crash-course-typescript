import React from "react";
import "../App.css";
import PostsList from "../components/PostsList";
import { Outlet, LoaderFunction } from "react-router-dom";
import { API_BASE_URL } from "../api-config";

const Posts: React.FC = () => {
  return (
    <>     
      <Outlet />
      <main>
        <PostsList />      
      </main>
    </>
  );
};

export default Posts;

export const loader: LoaderFunction = async () => {
  const response = await fetch(`${API_BASE_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  const resData = await response.json();
  return resData.posts;
};
