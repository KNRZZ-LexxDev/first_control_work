import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
    return (
        <header style={{ display: "flex", gap: 10 }}>
            <h4>
                <Link to={"/"}> На главную </Link>
            </h4>

            <h4>
                <Link to={"/register"}> Регистрация </Link>
            </h4>

            <h4>
                <Link to={"/auth"}> Авторизация </Link>
            </h4>

            <h4>
                <Link to={"/list"}> Список </Link>
            </h4>
            
            <h4>
                <Link to={"/profile"}> Профиль </Link>
            </h4>
        </header>
    );
};