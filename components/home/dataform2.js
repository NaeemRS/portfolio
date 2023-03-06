import React, { useState } from "react";

function Dataform2() {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // send form data to the server here
    console.log(formData);
  };

  return (
    <>
      <section className="py-40 bg-black">
        <div className="container mx-auto ">
          <div className="grid grid-cols-4">
            <div className="bg-[#6aadb9] border flex items-center justify-center p-6 rounded-xl shadow-sm">
              <form className="w-full" onSubmit={handleSubmit}>
                <div className="">
                  <label className="block">Name:</label>
                  <input
                    className="bg-white h-14 px-3 rounded-lg border-none focus:border-none focus-within:border-none w-full"
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                </div>
                <div className="">
                  <label className="block">Email:</label>
                  <input
                    className="bg-white h-14 px-3 rounded-lg border-none focus:border-none focus-within:border-none w-full"
                    type="email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" onSubmit={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dataform2;
