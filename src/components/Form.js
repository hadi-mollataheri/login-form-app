import React from "react";

function Form(props) {
  // Create event handlers that update the states using setter props
  const handleFirstNameChange = ({ target }) => {
    // Because i want to update an state object i use prev => ... syntax not because
    // my current state value is related to previous one
    props.setInputValues((prevStateObj) => {
      return {
        ...prevStateObj,
        firstName: target.value,
      };
    });
  };
  const handleLastNameChange = ({ target }) => {
    props.setInputValues((prevStateObj) => {
      return {
        ...prevStateObj,
        lastName: target.value,
      };
    });
  };
  const handleEmailChange = ({ target }) => {
    props.setInputValues((prevStateObj) => {
      return {
        ...prevStateObj,
        email: target.value,
      };
    });
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
          value={props.inputValues.firstName}
          placeholder="First Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <input
          type="text"
          onChange={handleLastNameChange}
          name="last-name"
          value={props.inputValues.lastName}
          placeholder="Last Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <input
          type="email"
          onChange={handleEmailChange}
          name="email"
          value={props.inputValues.email}
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
