import React from 'react';
import classes from './post.module.sass';
import {Link} from 'react-router-dom';
import dateFormat, { i18n } from 'dateformat';

import view from '../../assets/img/view.png';
import PreloaderPost from './PreloaderPost';

const Post = ({children, id, img, title, tags, viewsCount, isLoading, user, date}) => {
    if (isLoading) {
        return <PreloaderPost />;
    }

    i18n.monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
    ];

    return (
        <div className={classes.post}>
            <Link to={`/post/${id}`}>
                <img src={img} alt="img-post"
                     className={classes.img} />
                <div className={classes.main}>
                    <div className={classes.info}>
                        <img src={user.avatarUrl} className={classes.avatar} alt="avatar"/>
                        <div>
                            <div className={classes.name}>{user.fullName}</div>
                            <div className={classes.date}>{dateFormat(date, 'longDate', i18n.monthNames)}</div>
                        </div>
                    </div>
                    <div className={classes.title}>{title}</div>
                </div>
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