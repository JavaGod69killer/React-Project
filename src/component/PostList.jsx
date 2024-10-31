import { useState } from "react";
import Post from "./Post";
import NewForms from "./NewForms";
import Module from "./Module";

const PostList = () => {
  const [enteredBody, setEnteredBody] = useState("");

  const handleBodyChange = (e) => {
    setEnteredBody(e.target.value);
  };

  return (
    <>
      <div>
        <Module />
        <ul className="list-none max-w-3xl my-4 mx-auto py-4 grid grid-cols-3 gap-4 justify-center">
          <NewForms body={enteredBody} handleBodyChange={handleBodyChange} />
          <Post title="React Lesson" body={enteredBody} />
          <Post title="Holiin Busgui" body="Holiin huurhun busgui" />
        </ul>
      </div>
    </>
  );
};

export default PostList;
