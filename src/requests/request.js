import axios from "axios";
import { BASE_URL } from "../consts/url";

export const baseURL = axios.create({
    baseURL: BASE_URL,
    headers: {},
})

export const getPost = () => {
    return baseURL("/products")
}

export const getProfile = () => {
    return baseURL("/profile")
}

export const getAuth = () => {
    return baseURL("/auth")
}

export const getCheckToken = () => {
    return baseURL("/")
}