import React from "react";

import styles from "./styles.module.css";

const Progress = (props) => {
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
        <div className={styles.progressWrap}>
            <div style={containerStyles}>
                <div style={fillerStyles}>
                    <span style={labelStyles}>{`${props.completed}%`}</span>
                </div>
            </div>
        </div>
    );
};

Progress.defaultProps = {
    completed: 0,
};

export default Progress;
