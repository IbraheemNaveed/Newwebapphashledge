import React, { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/usercontext";
function Index() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  console.log(user);
  const formHandler = (e) => {
    e.preventDefault();

    if (passwordRef.current.value === confirmPasswordRef.current.value) {
      setUser({
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      window.localStorage.setItem("user", {
        name: nameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      navigate("/login");
    } else {
      alert("password does not match");
    }
  };
  return (  
    <div className="  bg-[#171717]  min-h-screen flex flex-col">
       <div className="h-16 w-full bg-[#6AE6B0] mt-7 blur-[250px] absolute "></div>
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Contact us here</h1>
          <form onSubmit={formHandler}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
              ref={nameRef}
              required
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              ref={emailRef}
              required
            />

            <input
              type="phonenumber"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="number"
              placeholder="+92 123 456789"
              ref={passwordRef}
              required
            />
            <input
               type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Message"
              ref={confirmPasswordRef}
              required
            />

            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white bg-green-800 focus:outline-dashed my-1"
            >
              Contact us here
            </button>
          </form>

          <div className="text-center text-sm text-grey-dark mt-4">
            By Clicking here, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
               Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-slate-100 mt-6">
          Already Texted us? 
          <NavLink
            // replace={true}
            to={{ pathname: "/login" }}
            className="no-underline border-b border-blue text-blue"
          >
            Need Heep 
          </NavLink>
          .
        </div>
      </div>
      <div className=" w-40  h-36 bg-gradient-to-r from-[#4ADE80]/50 to-[#6EE7B7]  blur-[100px] absolute ">
              {" "}
            </div>
    </div>
  );
}

export default Index;
