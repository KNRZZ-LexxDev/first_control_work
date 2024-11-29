import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth } from "../../requests/request";
import { TextInput } from "../../components/inputs/text-input/text-input";
import { useContext } from "react";
import { AuthContext } from "../../App";
import '../../styles/pages/auth.css'

export const Auth = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues, setValue, watch
    } = useForm();

    const onSubmit = (data) => {
        var userData = JSON.parse(localStorage.getItem('user'));
        const {email, password} = data
        // console.log(userData)
        // console.log(userData.user_email, userData.user_pass)
        // console.log('hook', userPhone, userPassword)
        // console.log(userPhone === userData.user_phone == false ? 'не робит' : "робит")
        // console.log(userPassword == userData.user_pass == false ? 'не робит' : "робит")

        if (password == userData.user_pass && email == userData.user_email) {
            setIsAuth(true);
            navigate('/');
        }

    }

    const logoutHandler = () => {
        setIsAuth(false);
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <div className="auth__wrap">
            <div className="auth__form-wrap">
                <div className="form__head-wrap">
                    <p className="form__head-text">Auth</p>
                </div>

                <div className="form__desc-wrap">
                    <p className="form__desc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        // label={"Номер телефона"}
                        errors={errors}
                        name={"email"}
                        placeholder={"Email"}
                        register={register}
                        validate={{ required: true }}
                    />

                    <TextInput
                        // label={"Пароль"}
                        errors={errors}
                        name={"password"}
                        placeholder={"Password"}
                        register={register}
                        validate={{ required: true }}
                    />


                    <button className="auth__button">Auth</button>
                </form>
            </div>


            <div className="auth__imgs-wrap">
                <div className="auth__icon-back">
                    <div className="auth__icon"></div>
                </div>

                <div className="auth__img-wrap">
                    <div className="auth__img"></div>
                </div>
            </div>
        </div>
    );
};