import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  // Create state for every three inputs so we can store and control user input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

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
        isSubmit={isSubmit}
        setIsSubmit={setIsSubmit}
      />
    </div>
  );
}

export default App;
