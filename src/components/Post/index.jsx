import React from 'react';
import classes from './post.module.sass';
import {Link} from 'react-router-dom';

import view from '../../assets/img/view.png';
import PreloaderPost from './PreloaderPost';

const Post = ({children, id, img, title, tags, viewsCount, isLoading}) => {
    if (isLoading) {
        return <PreloaderPost />;
    }

    return (
        <div className={classes.post}>
            <Link to={`/post/${id}`}>
                <img src={img} alt="img-post"
                     className={classes.img} />
                <div className={classes.title}>{title}</div>
            </Link>
            {children && <div className={classes.content}>{children}</div>}
            <div className={classes.footer}>
                <div className={classes.tags}>
                    {tags.map((tag, index) => (
                        <div key={index} className={classes.tag}>{tag}</div>
                    ))}
                </div>

                <div className={classes.view}>
                    <img src={view} className={classes.icon} alt="views"/>
                    <div className={classes.count}>{viewsCount}</div>
                </div>
            </div>
        </div>
    );
};

export default Post;