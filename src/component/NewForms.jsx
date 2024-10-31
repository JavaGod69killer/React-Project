import { useState } from "react";

const NewForm = ({ handleBodyChange }) => {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");

  const onBodyChange = (e) => {
    setEnteredBody(e.target.value);
    handleBodyChange(e);
  };

  const onTitleChange = (e) => {
    setEnteredTitle(e.target.value);
  };

  return (
    <form className="bg-purple-700 p-4 w-80 ml-[10%] rounded-md shadow-md">
      <p>
        <label htmlFor="body" className="block mb-1 text-purple-100">
          Body
        </label>
        <textarea
          name="body"
          id="body"
          required
          rows={3}
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={onBodyChange}
          value={enteredBody}
        ></textarea>
      </p>
      <p className="text-lg text-white">
        <label htmlFor="title" className="block mb-1 text-purple-100 font-bold">
          Your title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="block w-full p-2 rounded-md border-none bg-purple-300 text-gray-800"
          onChange={onTitleChange}
          value={enteredTitle}
        />
      </p>
    </form>
  );
};

export default NewForm;
