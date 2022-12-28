import React, { useState } from "react";

const Ress = (props) => {
  console.log(props.data);
  const [data, setdata] = useState(props.data);
  console.log(data);
  return (
    <>
      <div className=" border-2 border-black">
        <ul>
          <div>
            {" "}
            <p className=" text-green-700 font-bold text-2xl ">
              {" "}
              LIST OF AVAILABLE PLANTS:{" "}
            </p>{" "}
          </div>
          {data.map((item, index) => (
            <>
              <li className="text-[#ffffff]" key={index}>
                {item.label}
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Ress;
