import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth } from "../../requests/request";
import { TextInput } from "../../components/inputs/text-input/text-input";
import { useContext } from "react";
import { AuthContext } from "../../App";
import '../../styles/components/listCard.css'

export const ListCard = ({title, price, img}) => {

    return (
        <div className="listCard__wrap">
            <img src={img} className="listCard__img"/>
            <div className="listCard__inf-wrap">
                <p className="listCard__title">{title}</p>
                <p className="listCard__desc">Lavander Spark</p>
                <p className="listCard__price">${price}</p>
            </div>
        </div>
    );
};