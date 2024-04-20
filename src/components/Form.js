import React from "react";

function Form(props) {
  // Create event handlers that update the states using setter props
  const handleFirstNameChange = ({ target }) => {
    props.setFirstName(target.value);
  };
  const handleLastNameChange = ({ target }) => {
    props.setLastName(target.value);
  };
  const handleEmailChange = ({ target }) => {
    props.setEmail(target.value);
  };

  // Other version: using one state for all three input fields:
  /*

  */

  return (
    <div id="form-container" className="border-30px border-green-600 p-3">
      <form
        method="POST"
        action="#"
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="text"
          onChange={handleFirstNameChange}
          name="first-name"
          value={props.firstName}
          placeholder="First Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          name="last-name"
          value={props.lastName}
          placeholder="Last Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <input
          type="email"
          onChange={handleEmailChange}
          name="email"
          value={props.email}
          placeholder="Email"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <input
          type="submit"
          value="Register"
          className="p-3 bg-green-700 text-white w-full"
        />
      </form>
    </div>
  );
}

export default Form;
