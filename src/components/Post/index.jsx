import React from 'react';
import classes from './post.module.sass';
import {Link, useNavigate} from 'react-router-dom';
import dateFormat, { i18n } from 'dateformat';
import {useDispatch} from 'react-redux';

import view from '../../assets/img/view.png';
import pencil from '../../assets/img/pencil.svg';
import remove from '../../assets/img/remove.svg';
import PreloaderPost from './PreloaderPost';
import {api} from '../../axios';
import {fetchPosts} from '../../redux/slices/posts';

const Post = ({children, id, img, title, tags, viewsCount, isLoading, user, date, isEditable}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    if (isLoading) return <PreloaderPost />;

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

    const onClickEditBtn = () => {
        navigate(`/post/${id}/edit`);
    };
    const onClickRemoveBtn = async () => {
        try {
            if(window.confirm('Вы действительно хотите удалить пост?')) {
                await api.removePost(id);
                dispatch(fetchPosts());
            }
        } catch (err) {
            alert('Не удалость удалить пост!');
        }
    };

    return (
        <div className={classes.post}>
            {isEditable &&
            <div className={classes.btnGroup}>
                <button className={classes.btnItem} onClick={onClickEditBtn}>
                    <img src={pencil} alt='Изменить'/>
                </button>
                <button className={classes.btnItem} onClick={onClickRemoveBtn}>
                    <img src={remove} alt='Изменить'/>
                </button>
            </div>
            }
            <img src={img} alt="img-post" className={classes.img}/>
            <div className={classes.main}>
                <div className={classes.info}>
                    <img src={user.avatarUrl} className={classes.avatar} alt="avatar"/>
                    <div>
                        <div className={classes.name}>{user.fullName}</div>
                        <div className={classes.date}>{dateFormat(date, 'longDate', i18n.monthNames)}</div>
                    </div>
                </div>
                <Link to={`/post/${id}`} className={classes.title}>{title}</Link>
            </div>
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