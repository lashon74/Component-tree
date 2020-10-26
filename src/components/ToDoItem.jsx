import React from "react";

function ToDo(props) {
  return (
    // makes it where the onChecked function only gets called when you click on the item
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.text}</li>;
    </div>
  );
}

export default ToDo;
