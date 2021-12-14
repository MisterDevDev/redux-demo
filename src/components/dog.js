import React from "react";

const Dog = ({ id, createNote }) => {
  return (
    <div key={id}>
      <div>
        Dog #:
        <br />
        {id.slice(0, 8)}
      </div>
      <button onClick={() => createNote(id)}>Create Note</button>
    </div>
  );
};

export default Dog