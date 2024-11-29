import React, { useEffect, useState } from "react";
import { getPost } from "../../requests/request";
import { ListCard } from "../../components/cards/listCard";
import '../../styles/pages/list.css'
import { Preloader } from "../../components/preloader/pleloader";
import { ErrorRender } from "../../components/error-render/error-render";
export const List = () => {
    const [list, setList] = useState([])
    
    useEffect(() => {
        getPost().then(({ data }) => setList(data)).catch()
    }, [])

    console.log(list)

    return (
        <div className="list__wrap">

            <div className="listHead__wrap">
                <p className="listHead__head-text">Products</p>
                <p className="listHead__desc-text">356 Total Products</p>
            </div>

                    {list.map((elem, index) => {
                        return (
                            <ListCard key={elem.id} title={elem.title} price={elem.price} img={elem.banner} />
                        )
                    })}
        </div>
    );
};