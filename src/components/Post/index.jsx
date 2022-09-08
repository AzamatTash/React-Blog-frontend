import React from 'react';
import classes from "./post.module.sass";
import {Link} from "react-router-dom";

import view from "../../assets/img/view.png";

const Post = (props) => {
    const {children, id} = props
    return (
        <div className={classes.post}>
            <img src='https://cdn.nur.kz/images/1120/daedc6636b82c2f6.jpeg' alt="img-post"
                 className={classes.img} />
            <Link className={classes.title} to={`/post/${id}`}>React</Link>
            {children && <div className={classes.content}>{children}</div>}
            <div className={classes.footer}>
                <div className={classes.tags}>
                    <a className={classes.tag} href='/src/components/Pages'>React</a>
                    <a className={classes.tag} href='/src/components/Pages'>React</a>
                    <a className={classes.tag} href='/src/components/Pages'>React</a>
                    <a className={classes.tag} href='/src/components/Pages'>NodeJS</a>
                </div>

                <div className={classes.view}>
                    <img src={view} className={classes.icon} alt="views"/>
                    <div className={classes.count}>15</div>
                </div>
            </div>
        </div>
    );
};

export default Post;