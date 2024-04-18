import React from "react";

function Form() {
  return (
    <div
      id="form-container"
      className="border-30px border-green-600 p-3 flex justify-center text-center"
    >
      <form method="POST" action="#" className="flex flex-col justify-center items-center">
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <br />
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <br />
        <input
          type="submit"
          value="Register"
          className="p-3 bg-green-700 m-1 text-white w-full"
        />
        <br />
      </form>
    </div>
  );
}

export default Form;
