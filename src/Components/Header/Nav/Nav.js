import React, {useState} from 'react';
import css from "./Nav.module.scss";
import {routhes} from "../../../Utils/routhes";
import {Link} from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "../../../Images/Logo/Logo.png";
import {DEMOS} from "../../../Utils/urls";

const Nav = () => {

    const [open, setOpen] = useState(false);
    const [subBurger, setSubBurger] = useState(null);

    const handleClickSub = (id) =>{
        setSubBurger(id);
        if (subBurger === id){
            setSubBurger(null)
        }
    }

    return (
        <>
            <nav>
                <ul className={css.ul}>
                    {
                        routhes.map(({id, path, name, submenu})=>{
                            return(
                                <li
                                    key={id}
                                    className={css.listItem}
                                >
                                    <Link
                                        to={path}
                                    >
                                        {name} {submenu && <KeyboardArrowDownIcon/>}
                                        {submenu && submenu?.length !==0 &&
                                            <ul
                                                className={css.subMenu + " animate__animated animate__fadeIn"}
                                            >
                                                {
                                                    submenu?.map(({id, name})=>{
                                                        return(
                                                            <li key={id}>
                                                                {name} <KeyboardArrowRightIcon/>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        }
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
            <div className={css.forMenu}>
                <MenuIcon
                    onClick={()=>setOpen(true)}
                />
                {
                    open ?
                        <nav>
                            <ul className={css.burgerUl + " animate__animated animate__fadeInLeft"}>
                                <div className={css.logoClose}>
                                    <Link className={css.logo} to={DEMOS}>
                                        <img src={logo} alt="Logo"/>
                                    </Link>
                                    <CloseIcon onClick={()=>setOpen(false)}/>
                                </div>
                                {
                                    routhes.map(({id, name, path,submenu})=>{
                                        return(
                                            <li
                                                key={id}
                                                className={css.burgerList}
                                            >
                                                <Link
                                                    to={path}
                                                    onClick={()=> handleClickSub(id)}
                                                >
                                                    {name} {submenu && <KeyboardArrowDownIcon/>}
                                                </Link>
                                                {submenu && submenu?.length !==0 &&
                                                    <ul
                                                        className={css.burgerSub + " animate__animated animate__fadeIn"}
                                                        style={subBurger === id ? {display: "flex"}: {display:"none"}}
                                                    >
                                                        {
                                                            submenu?.map(({id, name})=>{
                                                                return(
                                                                    <li key={id}>
                                                                        {name} <KeyboardArrowRightIcon/>
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                        : null
                }
            </div>
        </>
    );
};

export default Nav;