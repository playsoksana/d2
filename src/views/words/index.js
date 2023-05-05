import React from "react";

import { useLocation } from "react-router-dom";

import array from "core/lib/array";

import Container from "components/containers";
import TaskWithSentens from "components/business/task-with-sentens/index.js";

import one from "core/static/one/sentence.js";

const WordsPage = () => {
    const { pathname } = useLocation();
    const path = array.last(pathname.split("/"));
    let data = null;
    switch (path) {
        case "one":
            data = one;
            break;

        default:
            data = one;
            break;
    }

    const sentensSort = [...data].sort(() => Math.random() - 0.5);

    return (
        <div>
            <Container>
                <TaskWithSentens sentensSort={sentensSort} />
            </Container>
        </div>
    );
};

export default WordsPage;
