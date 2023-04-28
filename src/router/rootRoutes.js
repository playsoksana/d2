import React from "react";
import { Route, Routes } from "react-router-dom";

import WordsPage from "views/words/index.js";

// TODO: NotFound, views....

export default (
    <Routes>
        <Route exact={true} path="/d2" element={<WordsPage />} />
    </Routes>
);
