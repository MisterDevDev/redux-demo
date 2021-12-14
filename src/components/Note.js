import React from "react";

const Note = ({ dogId }) => {
  return (
    <div>Write a note about Dog #{dogId.slice(0, 8)}!</div>
  );
};

export default Note;
