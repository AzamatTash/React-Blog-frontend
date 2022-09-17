import React from 'react';
import classes from './tags.module.sass';
import {useDispatch} from 'react-redux';

import PreloaderTag from './PreloaderTag';
import {filterPosts} from '../../redux/slices/posts';

const Tag = ({tag, isLoading, setActiveFilter}) => {
    const dispatch = useDispatch();
    if (isLoading) return <PreloaderTag/>

    const handleOnClickTag = e => {
        dispatch(filterPosts(e.target.innerText));
        setActiveFilter(1)
    }

    return (
        <div className={classes.tag} onClick={handleOnClickTag}>
            {tag}
        </div>
    );
};

export default Tag;