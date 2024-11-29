import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";
import { getPost } from "../../requests/request";
import { ListCard } from "../../components/cards/listCard";
import { useNavigate } from "react-router-dom";
import '../../styles/pages/main.css'
export const Main = () => {
    const navigate = useNavigate();
    const [list, setList] = useState([])
    const { isAuth, setIsAuth } = useContext(AuthContext);

    useEffect(() => {
        getPost().then(({ data }) => setList(data)).catch()
    }, [])

    console.log(list)

    {
        if (!isAuth) {
            navigate('/register')
        }
    }

    return (
        <div className="main__wrap">

            <div className="listHead__wrap">
                <p className="listHead__head-text">Products</p>
                <p className="listHead__desc-text">356 Total Products</p>
            </div>

            <div className="mainPost__wrap">
                {list.map((elem, index) => {
                    return (
                        <ListCard key={elem.id} title={elem.title} price={elem.price} img={elem.banner} />
                    )
                })}
            </div>
        </div>
    );
};