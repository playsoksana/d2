import React from "react";

const Backspace = ({ color }) => {
    return (
        <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill={color}
        >
            <title>backspace</title>
            <path d="M0 10l7-7h13v14h-13l-7-7zM14.41 10l2.13-2.12-1.42-1.42-2.12 2.14-2.12-2.13-1.42 1.42 2.14 2.11-2.13 2.12 1.42 1.42 2.11-2.14 2.12 2.13 1.42-1.42-2.14-2.11z"></path>
        </svg>
    );
};

export default Backspace;
