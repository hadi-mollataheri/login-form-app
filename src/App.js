import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  // Create state for every three inputs so we can store and control user input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Create a state for checking the validity of input values(that they are not empty)
  const [isValid, setIsValid] = useState(false);

  return (
    <div
      id="container"
      className="flex flex-col items-center justify-center mt-20 p-5 bg-green-500 min-w-64"
    >
      <Form
        firstName={firstName}
        setFirstName={setFirstName}
        lastName={lastName}
        setLastName={setLastName}
        email={email}
        setEmail={setEmail}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        isValid={isValid}
        setIsValid={setIsValid}
      />
    </div>
  );
}

export default App;
