import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../Header";
import Landing from "../Landing";
import SignIn from "../SignIn";
import SignInWater from "../SignInWater";

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signin-water" element={<SignInWater />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;