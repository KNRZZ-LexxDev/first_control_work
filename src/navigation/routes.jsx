import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Layout } from "./layout";
import { ErrorElement } from "./error-element";
import { Main } from "../pages/main/main";
import { Register } from "../pages/register/register";
import { Auth } from "../pages/auth/auth";
import { List } from "../pages/list/list";
import { Profile } from "../pages/profile/profile";
const authPages = [
    {
        path: "/profile",
        Component: Profile,
    },
    {
        path: "/list",
        Component: List,
    },

    {
        path: "/register",
        Component: Register,
    },
    {
        path: "/auth",
        Component: Auth,
    },
];

const notAuthPages = [
    {
        path: "/register",
        Component: Register,
    },
    {
        path: "/auth",
        Component: Auth,
    },
];

export const getRoutes = (isAuth) => {
    return createBrowserRouter([
        {
            Component: Layout,
            errorElement: <ErrorElement />,
            children: [
                {
                    path: "/",
                    Component: Main,
                },

                ...(isAuth ? authPages : notAuthPages),
            ],
        },
    ]);
};