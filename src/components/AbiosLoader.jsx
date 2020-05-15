import React from "react";
import Loader from "react-loader-spinner";

export function AbiosLoader() {
  return (
    <div className="loader">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        padding-top={500}
        timeout={4000} //4 secs
      />
    </div>
  );
}
