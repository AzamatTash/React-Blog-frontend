import React from 'react';
import classes from './tags.module.sass';
import Tag from './Tag';

const Tags = () => {
    return (
        <div className={classes.tags}>Tags:
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
            <Tag/>
        </div>
    );
};

export default Tags;