import React from 'react';
import css from "./Post.module.scss";
import {useSelector} from "react-redux";
import CircleIcon from '@mui/icons-material/Circle';

const Post = () => {

    const posts = useSelector(state => state.posts.posts);

    console.log(posts)

    const searchPosts = useSelector(state => state.posts.search);

    return (
        <div className={css.posts}>
            {
                searchPosts === "" ?
                posts.map(({id, category, title, user, date, views, content, img, imgSet })=>{
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
                    posts.filter(item => item.title.includes(searchPosts) || item.content.includes(searchPosts)).map(({id, category, title, user, date, views, content, img, imgSet })=>{
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