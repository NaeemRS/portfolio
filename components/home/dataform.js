import React, { useState } from "react";

export default function Dataform() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <>
      <div className="block  lg:p-12 md:p-8 p-7
       bg-white rounded-lg shadow-lg">
        <form className="w-full">
          <div className="grid  grid-cols-1 gap-4">
            <input
              required
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputs}
              className="form-control
                 block w-full h-12 px-3 mb-3 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="name"
              aria-describedby="emailHelp123"
              placeholder="First name"
            />

            <input
              required
              type="number"
              name="number"
              value={user.number}
              onChange={handleInputs}
              className="form-control  w-full h-12 px-3 mb-3 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="number"
              aria-describedby="emailHelp124"
              placeholder="Number"
            />

            <input
              required
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputs}
              className="form-control  w-full  h-12 px-3 mb-3 text-base font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="email"
              placeholder="Email address"
            />
         
          
          <div className="relative flex items-center mb-3 form-group">
            <input
              required
              type={passwordVisibility ? "text" : "password"}
              name="password"
              value={user.password}
              onChange={handleInputs}
              className="form-control block  w-full  h-12 px-3  text-base  font-normal  text-gray-700  bg-white bg-clip-padding border border-solid border-gray-300  rounded transition  ease-in-out  m-0  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="password"
              placeholder="Password"
            />
            <a
              className="absolute cursor-pointer right-3"
              onClick={() => {
                setPasswordVisibility(!passwordVisibility);
              }}
            >
              <img
                src={
                  passwordVisibility ? "/images/hide.svg" : "/images/view.svg"
                }
                className="w-5 h-4"
              />
            </a>
          </div>
          </div>
          <div className="mb-6  form-group form-check">
            <input
              type="checkbox"
              className="w-4 h-4 mt-1 mr-2 align-top transition duration-200 bg-white bg-center bg-no-repeat bg-contain border border-gray-300 rounded-sm appearance-none cursor-pointer form-check-input checked:bg-blue-600 checked:border-blue-600 focus:outline-none"
              id="exampleCheck25"
              checked
            />
            <label
              className="inline-block text-gray-800 form-check-label"
              for="exampleCheck25"
            >
              Subscribe to our newsletter
            </label>
          </div>
         <div className="flex justify-center items-center">
         <button
            type="submit"
            className=" w-60 mx-auto h-12 bg-blue-600 text-white font-medium text-xs uppercase  rounded shadow-md  hover:bg-blue-700 hover:shadow-lg  focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0  active:bg-blue-800 active:shadow-lg transition  duration-150  ease-in-out"
          >
            Sign up
          </button>
         </div>
        </form>
      </div>
    </>
  );
}
