import React, { useState } from "react";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitleChange(event) {
    setTitle(event.target.value);
  };

  function handleContentChange(event) {
    setContent(event.target.value);
  };

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    props.onSubmit(title, content);
    setTitle(""); // Reset the title field
    setContent(""); // Reset the content field
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleTitleChange} name="title" placeholder="Title" value={title}/>
        <textarea onChange={handleContentChange} name="content" placeholder="Take a note..." rows="3" value={content}/>
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
