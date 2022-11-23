import React from 'react';
import classes from './tags.module.sass';
import {useDispatch} from 'react-redux';

import {fetchPosts} from '../../redux/slices/posts';
import {MyContext} from '../../App';

const Tag = ({tag}) => {
    const dispatch = useDispatch();
    const {viewSideBar, setViewSideBar, setActiveFilter} = React.useContext(MyContext);

    const handleOnClickTag = e => {
        setActiveFilter(1);
        setViewSideBar(!viewSideBar);
        dispatch(fetchPosts(e.target.innerText.replace('#', '')));
    };

    return (
        <div className={classes.tag} onClick={handleOnClickTag}>
            #{tag}
        </div>
    );
};

export default Tag;