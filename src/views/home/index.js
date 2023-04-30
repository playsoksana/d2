import React from "react";

import Container from "components/containers";

import { Link, useLocation } from "react-router-dom";

const HomePage = () => {
    const location = useLocation();

    return (
        <div>
            <Container>
                <Link to={`${location.pathname}/one`}>1</Link>
                {/* <Link to={`${pathname}/one`}>2</Link>
                <Link to={`${pathname}/one`}>3</Link> */}
            </Container>
        </div>
    );
};

export default HomePage;
