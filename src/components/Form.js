import React from "react";

function Form() {
  return (
    <div
      id="form-container"
      className="border-30px border-green-600 p-3"
    >
      <form method="POST" action="#" className="flex flex-col items-center space-y-4">
        <input
          type="text"
          name="first-name"
          placeholder="First Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <input
          type="text"
          name="last-name"
          placeholder="Last Name"
          className="p-3 bg-slate-100 m-1 w-full"
        />
        <input
          type="email"
          name="email"
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
