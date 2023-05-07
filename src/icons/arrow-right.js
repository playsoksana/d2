import React from "react";

const ArrowRight = ({ color }) => {
    return (
        <svg version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill={color}
            viewBox="0 0 32 32">
            <title>arrow-right</title>
            <path d="M31 16l-15-15v9h-16v12h16v9z"></path>
        </svg>
    );
};

export default ArrowRight;
