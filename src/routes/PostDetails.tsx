import { useLoaderData, Link, LoaderFunction } from 'react-router-dom';
import Modal from '../components/Modal';
import classes from './PostDetails.module.css';
import { PostData } from '../components/PostsList';
import { API_BASE_URL } from '../api-config';

function PostDetails() {
  const post = useLoaderData() as PostData;

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export const loader: LoaderFunction = async ({ params }) => {
  const { postId } = params;
  if (!postId) {
    throw new Error("Post ID is required");
  }

  const response = await fetch(`${API_BASE_URL}/posts/${postId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch post");
  }
  
  const postData = await response.json();
  return postData.post;
};