import React from 'react';
import css from "./Main.module.scss";
import {Route, Routes, Navigate} from "react-router-dom";
import {routhes} from "../../Utils/routhes";
import {DEMOS} from "../../Utils/urls";

const Main = ({headerChange}) => {
    return (
        <div className={css.main} style={headerChange ? {marginTop: "11.75rem"} : {marginTop: "3rem"}}>
            <Routes>
                {
                    routhes.map(({id, path, element})=>{
                        return(
                            <Route
                                key={id}
                                path={path}
                                element={element}
                                exact={true}
                            />
                        )
                    })
                }
                <Route path={"*"} element={<Navigate to={DEMOS}/>}/>
            </Routes>
        </div>
    );
};

export default Main;