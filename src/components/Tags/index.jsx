import React from 'react';
import classes from './tags.module.sass';

import Tag from './Tag';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTags} from '../../redux/slices/tags';
import notFount from '../../assets/img/notfound-tags.svg';

const Tags = () => {
    const dispatch = useDispatch();
    const {items, status} = useSelector(state => state.tags);
    const isTagsError = status === 'error';

    React.useEffect(() => {
        dispatch(fetchTags());
    }, []);

    return (
        <div className={classes.tags}>
            <div className={classes.title}>Поиск по тегу</div>
            {
                isTagsError ? <div className={classes.notFound}>Теги не найдены<img src={notFount} alt="404"/></div>:
                    items.map((tag, index) => <Tag key={index} tag={tag}/>)
            }
        </div>
    );
};

export default Tags;