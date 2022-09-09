import React from 'react';
import classes from "./tags.module.sass";
import PreloaderTag from "./PreloaderTag";

const Tag = () => {
    const isLoading = false;

    if (isLoading) return <PreloaderTag/>

    return (
        <div>
            <a className={classes.tag} href='/src/components/Pages'>
                # React
            </a>
        </div>
    );
};

export default Tag;