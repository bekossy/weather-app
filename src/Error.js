import React from "react";

export const Error = (props) => {
  const { isEmpty, isError } = props;

  if (isError) {
    document.body.style.background = "#a3a3a3";
  }
  return (
    <>
      <div className="empty">
        <svg
          style={{ width: "30px", height: "30px", marginRight: "5px" }}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19 20H6C2.7 20 0 17.3 0 14C0 10.9 2.3 8.4 5.3 8C6.6 5.6 9.1 4 12 4C15.6 4 18.7 6.6 19.4 10C22 10.2 24 12.3 24 15C24 17.7 21.7 20 19 20M11 15V17H13V15H11M11 13H13V7H11V13Z"
          />
        </svg>
        {isEmpty ? "please enter a country" : "Weather Information Unavailable"}
      </div>
    </>
  );
};
