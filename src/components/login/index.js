import React from "react";
import { useRef, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/usercontext.jsx";
function Index() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const formHandler = (e) => {
    e.preventDefault();
    if (user.email === emailRef.current.value) {
      if (user.password === passRef.current.value) {
        navigate("/result");
      } else {
        alert("password is wrong");
      }
    } else {
      alert("/result");
    }
  };
  return (
    <>
    <div className=" bg-[#171717] py-20  min-h-screen  " >
    <div className="h-16 w-full bg-[#6AE6B0] mt-7 blur-[250px] absolute "></div>
    <div className="bg-white  py-20 rounded shadow-md  text-black  container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center  " >
    <div className=" text-4xl  mt-4 text-center  "> 
      <h1> LOGIN </h1>
       </div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2 mt-8 ">
        <form onSubmit={formHandler}>
          <input
            type="email"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            placeholder="Email"
            ref={emailRef}
            required
          />
          <input
            type="password"
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
            ref={passRef}
            required
          />
          <div className=" text-center  ">
            <button
              type="submit"
              // replace={true}
              className="border border-green-700  px-6 py-3 bg-green-600 text-white"
            >
              Log in
            </button>
          </div>
         
          <div>
          <NavLink  exact to="/New" >
            <button>  reset password </button>
            </NavLink>
          </div>
        </form>
      </div>

      </div>
      <div className="     w-40  h-36 bg-gradient-to-r from-[#4ADE80]/50 to-[#6EE7B7]  blur-[100px] absolute ">
              {" "}
            </div>
      </div>
    </>
  );
}

export default Index;