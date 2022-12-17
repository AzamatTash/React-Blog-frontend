import React from 'react';
import classes from './notFound.module.sass';

import notFound from '../../assets/img/notfound.jpg';

const NotFound = () => {
    return (
        <div>
            <h1 className={classes.title}>Посты не найдены!</h1>
            <p className={classes.text}>Проверьте подключение к интернету или попробуйте позже.</p>
            <img className={classes.image} src={notFound} alt='404'/>
        </div>
    );
};

export default NotFound;