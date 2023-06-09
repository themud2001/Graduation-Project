import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Auth from "../Auth";
import Header from "../Header";
import Landing from "../Landing";
import WaterStationsList from "../WaterStationsList";
import WaterStation from "../WaterStation";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import NotFound from "../NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Auth>
                <Toaster />
                <Header />

                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/water-stations" element={<WaterStationsList />} />
                    <Route path="/water-stations/:id" element={<WaterStation />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Auth>
        </BrowserRouter>
    );
};

export default App;