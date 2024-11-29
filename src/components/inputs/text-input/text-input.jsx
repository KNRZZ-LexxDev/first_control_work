import React from "react";
import { getTextError } from "../../../helpers/validate-text";
import '../../../styles/components/text-input.css'

export const TextInput = (
    {
        initialValue = null,
        type,
        register,
        name,
        placeholder = "Введите значения",
        errors = [],
        label,
        validate = {},
        changeValue,
    }
) => {
    return(
        <div style={{ marginBottom: 16 }}>
            <div>{label}</div>
            <input
                className="input__text-wrap"
                type={type}
                placeholder={placeholder}
                {...register(name, validate)}
                defaultValue={initialValue}
                onChange={changeValue}
            />
            <div style={{ color: "red" }}>
                {errors[name] && getTextError(errors[name]?.type)}
            </div>
        </div>
    )
}