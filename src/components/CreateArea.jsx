import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [active, setActive] = useState(false);

  function handleTitleChange(event) {
    setTitle(event.target.value);
  }

  function handleContentChange(event) {
    setContent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    props.onSubmit(title, content);
    setTitle(""); 
    setContent(""); 
  }

  function handleActive() {
    setActive(true);
  }

  return (
    <div>
      <form className="create-note" onSubmit={handleSubmit}>
        <input
          onChange={handleTitleChange}
          name="title"
          placeholder="Title"
          value={title}
          onClick={handleActive}
        />
        {active && <textarea
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={content}
        />}

        <Zoom in={active}>
          <button>
            <AddIcon />
          </button>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
