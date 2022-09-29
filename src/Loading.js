import React from "react";

export const Loading = ({ isLoading }) => {
  if (isLoading) {
    document.body.style.background = "#a3a3a3";
  }
  return (
    <>
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    </>
  );
};
