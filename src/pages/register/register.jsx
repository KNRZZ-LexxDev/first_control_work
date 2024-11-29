import React, { useState } from "react";
import { TextInput } from "../../components/inputs/text-input/text-input";
import { useForm } from "react-hook-form";
import { DateInput } from "../../components/inputs/date-input/date-input";
import { useNavigate } from "react-router-dom";

import '../../styles/pages/register.css'

export const Register = () => {
    const [userFirstName, setUserFirstName] = useState("");
    const [userMiddleName, setUserMiddleName] = useState("");
    const [userLastName, setUserLastName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPass, setUserPass] = useState("");
    const [isRegistrationError, setIsRegistrationError] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();

    const navigate = useNavigate();

    function onSubmit() {
        localStorage.setItem("user", JSON.stringify(
            {
                "first_name": userFirstName,
                "middle_name": userMiddleName,
                "last_name": userLastName,
                "user_phone": userPhone,
                "user_email": userEmail,
                "user_pass": userPass,
            })
        )
        navigate('/auth')
    };

    return (
        <div className="register__wrap">
            <div className="register__form-wrap">

                <div className="form__head-wrap">
                    <p className="form__head-text">Register</p>
                </div>

                <div className="form__desc-wrap">
                    <p className="form__desc-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim facilisi elementum commodo ipsum. Aenean aenean adipiscing lect</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextInput
                        errors={errors}
                        name={"first_name"}
                        type={"text"}
                        // label={"Имя"}
                        placeholder={"First Name"}
                        register={register}
                        validate={{ required: true }}
                        changeValue={(elem) => setUserFirstName(elem.target.value)}
                    />
                    <TextInput
                        errors={errors}
                        name={"last_name"}
                        type={"text"}
                        // label={"Отчество"}
                        placeholder={"Last Name"}
                        register={register}
                        validate={{ required: true }}
                        changeValue={(elem) => setUserLastName(elem.target.value)}
                    />
                    <TextInput
                        errors={errors}
                        name={"middle_name"}
                        type={"text"}
                        // label={"Фамилия"}
                        placeholder={"Middle Name"}
                        register={register}
                        validate={{ required: true }}
                        changeValue={(elem) => setUserMiddleName(elem.target.value)}
                    />

                    <TextInput
                        errors={errors}
                        name={"number"}
                        type={"text"}
                        // label={"Телефон"}
                        placeholder={"Phone"}
                        register={register}
                        validate={{ required: true }}
                        changeValue={(elem) => setUserPhone(elem.target.value)}
                    />

                    <TextInput
                        errors={errors}
                        name={"email"}
                        type={"text"}
                        // label={"Почта"}
                        placeholder={"Email"}
                        register={register}
                        validate={{ required: true }}
                        changeValue={(elem) => setUserEmail(elem.target.value)}
                    />

                    <TextInput
                        errors={errors}
                        name={"password"}
                        type={"password"}
                        // label={"Пароль"}
                        placeholder={"Password"}
                        register={register}
                        validate={{ required: true }}
                        changeValue={(elem) => setUserPass(elem.target.value)}
                    />
                    <button className="register__button">Registration</button>
                </form>
            </div>

            <div className="register__imgs-wrap">
                <div className="register__icon-back">
                    <div className="register__icon"></div>
                </div>

                <div className="register__img-wrap">
                    <div className="register__img"></div>
                </div>
            </div>
        </div>
    );
};