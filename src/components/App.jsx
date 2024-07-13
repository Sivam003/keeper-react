import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [allNotes, setAllNotes] = useState([]);

  function addItems(title, content) {
    setAllNotes(prevValue => {
      return [
        ...prevValue,
        {
          title: title,
          content: content
        }
      ];
    });
  };

  function deleteItems(idx) {
    setAllNotes(prevValue => {
      return prevValue.filter((note, i) => i !== idx);
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onSubmit={addItems} />
      {allNotes.map((note, index) => {
        return <Note 
          key = {index}
          id = {index}
          title = {note.title}
          content = {note.content}
          onDelete={deleteItems}
        />
      })}
      <Footer />
    </div>
  );
}

export default App;
