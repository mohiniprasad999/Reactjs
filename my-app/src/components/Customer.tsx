import React, { useState } from "react";

interface ISTATE {
  name: String;
  title: String;
}

interface IPROPS {
  name: String;
  title: String;
  age?: Number;
}

let Customer: React.FC<IPROPS> = ({ name, title }) => {

  const [state, setState] = useState<ISTATE>({
    name: "State",
    title: "State Title"
  })

  return (
    <><div>
      <h1>Customer Component</h1>
      <h4>Name: {name}</h4>
      <h4>Title: {title}</h4>
    </div>
      <div>
        <h1>Value form State</h1>
        <h4>Name: {state.name}</h4>
        <h4>Name: {state.title}</h4>
      </div>
    </>
  );
};

export default Customer