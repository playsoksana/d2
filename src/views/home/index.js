import React from "react";

import { Link } from "react-router-dom";

import BtnLinkClass from "components/simple/Progress/btn-link-class";
import Container from "components/containers";

import styles from "./styles.module.css";

const HomePage = () => {
    return (
        <div>
            <Container>
                <Link to="/sentens-one-one/one" className={styles.link}>
                    <BtnLinkClass content="Lektion 1" />
                </Link>
            </Container>
        </div>
    );
};

export default HomePage;
