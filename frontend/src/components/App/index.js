import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "../Landing";
import SignIn from "../SignIn";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;