import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  // Create state for every three inputs so we can store and control user input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  // Other version: using one state for all three input fields:
  /*
    const [inputValues, setInputValue] = useState({
      firstName: '',
      lastName: '',
      email: ''
    });
  */

  return (
    <div
      id="container"
      className="flex flex-col items-center justify-center mt-20 p-5"
    >
      <Form
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
      />
      {/* Tests */}
      <p>{`I'm first name: ${firstName}`}</p>
      <p>{`I'm last name: ${lastName}`}</p>
      <p>{`I'm email: ${email}`}</p>
    </div>
  );
}

export default App;
