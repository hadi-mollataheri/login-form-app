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
  // handleSubmit should always update the isSubmitted sate to true but 
  // *separately*(because these 2 are 2 separate condition that must be met and then our form is allowed to be submitted) 
  // should check that if the inputs has values then update isValid to true
  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.firstName && props.lastName && props.email) {
      props.setIsValid(true);
    }
    props.setIsSubmitted(true);
  };

  return (
    <div
      id="form-container"
      className="p-3 flex flex-col items-center justify-center bg-white shadow-2xl"
    >
      {/* If submit button is clicked and if our input values are valid(exist) then render our success message */}
      {props.isSubmitted && props.isValid && (
        <div
          id="submit-answer"
          className="p-3 my-1 mx-auto w-full bg-blue-500 text-white text-center transition-all"
        >
          <p className="p-0 m-0`">Success! Thank you for registering</p>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full space-y-4 transition-all"
      >
        <div id="firstName" className="w-full">
          <input
            type="text"
            onChange={handleFirstNameChange}
            name="first-name"
            value={props.firstName}
            placeholder="First Name"
            disabled={props.isSubmitted && props.isValid}
            className="p-3 bg-slate-100 mx-auto w-full my-0"
          />
          {!props.firstName && props.isSubmitted ? (
            <span className="text-sm text-red-600 mt-0.5">
              Please enter a first name
            </span>
          ) : null}
        </div>
        <div id="lastName" className="w-full">
          <input
            type="text"
            onChange={handleLastNameChange}
            name="last-name"
            value={props.lastName}
            placeholder="Last Name"
            disabled={props.isSubmitted && props.isValid}
            className="p-3 bg-slate-100 mx-auto w-full my-0"
          />
          {!props.lastName && props.isSubmitted ? (
            <span className="text-sm text-red-600 mt-0.5">
              Please enter a last name
            </span>
          ) : null}
        </div>
        <div id="email" className="w-full">
          <input
            type="email"
            onChange={handleEmailChange}
            name="email"
            value={props.email}
            placeholder="Email"
            disabled={props.isSubmitted && props.isValid}
            className="p-3 bg-slate-100 mx-auto w-full my-0"
          />
          {!props.email && props.isSubmitted ? (
            <span className="text-sm text-red-600 mt-0.5">
              Please enter an email
            </span>
          ) : null}
        </div>
        <div id="input-4" className="w-full">
          <input
            type="submit"
            value="Register"
            disabled={props.isSubmitted && props.isValid}
            className="p-3 bg-green-700 text-white w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default Form;
