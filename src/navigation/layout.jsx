import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./header/header";

export const Layout = () => {
    return (
        <div>
            {/* <Header/>             */}
            <Outlet/>
            <div>footer</div>
        </div>
    );
};