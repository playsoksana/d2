import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "views/home/index";
import WordsPage from "views/words/index.js";

// TODO: NotFound, views....

export default (
    <Routes>
        <Route exact={true} path="/" element={<HomePage />} />
        <Route
            exact={true}
            path="/sentens-one-one/:id"
            element={<WordsPage />}
        />
    </Routes>
);
