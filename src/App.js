import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  // Other version: using one state for all three input fields:
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  return (
    <div
      id="container"
      className="flex flex-col items-center justify-center mt-20 p-5"
    >
      <Form inputValues={inputValues} setInputValues={setInputValues} />
      {/* Tests */}
      <p>{`I'm first name: ${inputValues.firstName}`}</p>
      <p>{`I'm last name: ${inputValues.lastName}`}</p>
      <p>{`I'm email: ${inputValues.email}`}</p>
    </div>
  );
}

export default App;
