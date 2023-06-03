import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Header from "../Header";
import Landing from "../Landing";
import SignIn from "../SignIn";
import SignUp from "../SignUp";

const App = () => {
    return (
        <BrowserRouter>
            <Toaster />
            <Header />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;