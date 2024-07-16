import React from "react";

const LogoutIco = (props: any) => {
  return (
    <svg
      width={props.width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -0.5 25 25"
      {...props}
    >
      <path
        className="group-hover/ico:fill-orange-500  group-hover/logo:fill-black duration-200"
        fill={props.color}
        d="M11.75 9.874a.75.75 0 0 0 1.5 0h-1.5ZM13.25 4a.75.75 0 0 0-1.5 0h1.5ZM9.81 6.662a.75.75 0 0 0-.62-1.366l.62 1.366ZM5.5 12.16l-.75-.004v.013l.75-.009Zm7 6.84.009-.75h-.018l.009.75Zm7-6.84.75.009v-.013l-.75.004Zm-3.69-6.864a.75.75 0 1 0-.62 1.366l.62-1.366Zm-2.56 4.578V4h-1.5v5.874h1.5ZM9.19 5.296a7.581 7.581 0 0 0-4.44 6.86l1.5.008a6.081 6.081 0 0 1 3.56-5.502l-.62-1.366ZM4.75 12.17a7.671 7.671 0 0 0 7.759 7.581l-.018-1.5a6.17 6.17 0 0 1-6.241-6.099l-1.5.018Zm7.741 7.581a7.67 7.67 0 0 0 7.759-7.581l-1.5-.018a6.171 6.171 0 0 1-6.241 6.099l-.018 1.5Zm7.759-7.594a7.581 7.581 0 0 0-4.44-6.86l-.62 1.366a6.081 6.081 0 0 1 3.56 5.502l1.5-.008Z"
      />
    </svg>
  );
};

export default LogoutIco;
