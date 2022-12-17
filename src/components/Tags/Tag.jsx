import React from 'react';
import classes from './tags.module.sass';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {MyContext} from '../../App';
import {setFilter} from '../../redux/slices/sort';

const Tag = ({tag}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {viewSideBar, setViewSideBar, setActiveFilter} = React.useContext(MyContext);

    const handleOnClickTag = e => {
        setActiveFilter(1);
        setViewSideBar(!viewSideBar);
        navigate('/');
        const currentTag = e.target.innerText.replace('#', '');
        dispatch(setFilter(currentTag));
    };

    return (
        <div className={classes.tag} onClick={handleOnClickTag}>
            #{tag}
        </div>
    );
};

export default Tag;