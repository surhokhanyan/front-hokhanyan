import React, {useState} from 'react';
import css from "./LogoSearch.module.scss";
import logo from "../../../Images/Logo/Logo.png"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {DEMOS} from "../../../Utils/urls";
import {searchPosts} from "../../../Store/postsSlice";

const LogoSearch = () => {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleClick = () => {
        setOpen(!open)
    }

    const handleChange = (e)=>{
        dispatch(searchPosts(e.target.value));
    }

    return (
        <div
            className={css.logoSearch}
        >
            <Link to={DEMOS} className={css.logoPlace}>
                <img src={logo} alt="Logo"/>
            </Link>
            <div className={css.searchPlace}>
                <SearchOutlinedIcon
                    onClick={handleClick}
                />
                {
                    open &&
                        <input
                            type="text"
                            className="animate__animated animate__fadeIn"
                            placeholder="Search ..."
                            onChange={(e)=>handleChange(e)}
                        />
                }
            </div>
        </div>
    );
};

export default LogoSearch;