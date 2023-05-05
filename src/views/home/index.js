import React from "react";

import { Link } from "react-router-dom";

import BtnLinkClass from "components/simple/btn-link-class/index.js";
import Container from "components/containers";

import styles from "./styles.module.css";

const HomePage = () => {
    return (
        <div>
            <Container>
                <Link to="/sentens-one-one/one" className={styles.link}>
                    <BtnLinkClass content="Lektion 1" />
                </Link>
                <Link to="/sentens-one-one/second" className={styles.link}>
                    <BtnLinkClass content="Lektion 2" />
                </Link>
            </Container>
        </div>
    );
};

export default HomePage;
