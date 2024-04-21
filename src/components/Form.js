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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.setIsSubmit(true);
  };

  return (
    <div
      id="form-container"
      className="border-30px p-3 border-green-600 flex flex-col items-center"
    >
      {props.isSubmit && (
        <div
          id="submit-answer"
          className="p-3 m-1 w-full bg-blue-500 text-white text-center"
        >
          <p className="p-0 m-0`">Success! Thank you for registering</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full space-y-4"
      >
        <div id='input-1'>
          <input
            type="text"
            onChange={handleFirstNameChange}
            name="first-name"
            value={props.firstName}
            placeholder="First Name"
            className="p-3 bg-slate-100 m-1 w-full my-0"
            required
            disabled={props.isSubmit}
          />
          <span className="self-start text-sm text-red-600 mt-0.5 mx-1">
            Please enter a first name
          </span>
        </div>
        <div id='input-2'>
          <input
            type="text"
            onChange={handleLastNameChange}
            name="last-name"
            value={props.lastName}
            placeholder="Last Name"
            className="p-3 bg-slate-100 m-1 w-full"
            required
            disabled={props.isSubmit}
          />
          <span className="self-start text-sm text-red-600 mt-0.5 mx-1">
            Please enter a last name
          </span>
        </div>
        <div id='input-3'>
          <input
            type="email"
            onChange={handleEmailChange}
            name="email"
            value={props.email}
            placeholder="Email"
            className="p-3 bg-slate-100 m-1 w-full"
            required
            disabled={props.isSubmit}
          />
          <span className="self-start text-sm text-red-600 mt-0.5 mx-1">
            Please enter an email
          </span>
        </div>
        <div id='input-4' className='w-full'>
          <input
            type="submit"
            value="Register"
            className="p-3 mx-1 bg-green-700 text-white w-full"
            disabled={props.isSubmit}
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
