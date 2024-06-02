import React from "react";
import classes from "./NewPost.module.css";
import Modal from "./../components/Modal";
import { Form, Link, redirect, ActionFunction } from "react-router-dom";
import { API_BASE_URL } from "../api-config";

const NewPost: React.FC = () => {
  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="body">내용</label>
          <textarea id="body" required rows={3} name="body" />
        </p>

        <p>
          <label htmlFor="name">작성자</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <Link to=".." className="button">
            취소
          </Link>
          <button type="submit">전송</button>
        </p>
      </Form>
    </Modal>
  );
};

export default NewPost;

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData) as { [key: string]: string };

  await fetch(API_BASE_URL + "/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
  });


  return redirect("/");
};
