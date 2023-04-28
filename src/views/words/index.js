import React from "react";

import Container from "components/containers";
import TaskWithSentens from "components/business/TaskWithSentens/index.js";

import sentens from "core/static/sentens.js";

const WordsPage = () => {
    const sentensSort = [...sentens].sort(() => Math.random() - 0.5);

    return (
        <div>
            <Container>
                <TaskWithSentens sentensSort={sentensSort} />
            </Container>
        </div>
    );
};

export default WordsPage;
