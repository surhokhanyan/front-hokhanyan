import React, {useEffect} from 'react';
import css from "./Post.module.scss";
import {useDispatch, useSelector} from "react-redux";
import {fetchData} from "../../Store/dataSlice";
import CircleIcon from '@mui/icons-material/Circle';

const Post = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchData())
    }, [dispatch])

    const data = useSelector(state => state.data.data);

    const searchData = useSelector(state => state.data.search);

    return (
        <div className={css.posts}>
            {
                searchData === "" ?
                data.map(({id, category, title, user, date, views, content, img, imgSet })=>{
                    return(
                        <div
                            key={id}
                            className={css.post}
                        >
                            <div className={css.img}>
                                <img
                                    src={img}
                                    srcSet={imgSet}
                                    alt="Post"/>
                            </div>
                            <span className={css.category}>{category}</span>
                            <h3 className={css.title}>{title}</h3>
                            <div className={css.uploadInfo}>
                                <span className={css.user}>{user}</span>
                                <CircleIcon/>
                                <span className={css.date}>{date}</span>
                                <CircleIcon/>
                                <span className={css.views}>{views} Views</span>
                            </div>
                            <p className={css.content}>{content}</p>
                        </div>
                    )
                }) :
                    data.filter(item => item.title.includes(searchData) || item.content.includes(searchData)).map(({id, category, title, user, date, views, content, img, imgSet })=>{
                        return(
                            <div
                                key={id}
                                className={css.post}
                            >
                                <div className={css.img}>
                                    <img
                                        src={img}
                                        srcSet={imgSet}
                                        alt="Post"/>
                                </div>
                                <span className={css.category}>{category}</span>
                                <h3 className={css.title}>{title}</h3>
                                <div className={css.uploadInfo}>
                                    <span className={css.user}>{user}</span>
                                    <CircleIcon/>
                                    <span className={css.date}>{date}</span>
                                    <CircleIcon/>
                                    <span className={css.views}>{views} Views</span>
                                </div>
                                <p className={css.content}>{content}</p>
                            </div>
                        )
                    })
            }
        </div>
    );
};

export default Post;