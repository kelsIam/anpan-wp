import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import NavBar from './NavBar.jsx';
import HomePage from './HomePage.jsx';
import CodeGenerator from "./CodeGenerator.jsx";

const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet /> 
        </>
    );
};

const NotFound = () => <h1> 404 Page Not Found</h1>;

//rendering app:
const App = () => {

    // render
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Route
                        exact
                        path="/"
                        element={<h1>Is this thing on?</h1>}
                    /> */}
                    <Route
                        exact
                        path="/"
                        element={<Layout />}
                    />
                    <Route
                        index element={<HomePage />}
                    />
                    <Route
                        exact
                        path='/CodeGenerator'
                        element={<CodeGenerator />}
                    />
                    <Route
                        exact
                        path='*'
                        element={<NotFound />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
 
export default App;