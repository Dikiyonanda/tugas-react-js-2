import React from "react";
const Kendaraan = (props) => {
  return (
    <div>
      <h1> Kendaraan : {props.jenis}</h1>
      <div>
        {props.type} {props.merek1}
      </div>
      <div>
        {props.type} {props.merek2}
      </div>
      <div>
        {props.type} {props.merek3}
      </div>
    </div>
  );
};

export default Kendaraan;
