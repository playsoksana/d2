import React from "react";

const Progress = (props) => {
    console.log(props);
    const containerStyles = {
        height: 30,
        width: "100%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        overflow: "hidden",
    };

    const fillerStyles = {
        height: "100%",
        width: `${props.completed}%`,
        backgroundColor: "#43918c",
        borderRadius: "inherit",
        textAlign: "right",
        display: "flex",
        alignItems: "center",
    };

    const labelStyles = {
        padding: 15,
        color: "white",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{`${props.completed}%`}</span>
            </div>
        </div>
    );
};

Progress.defaultProps = {
    completed: 0,
};

export default Progress;
