import React from 'react';
import classes from "./tags.module.sass";

const Tags = () => {
    return (
        <div className={classes.tags}>Tags:
            <a className={classes.tag} href='/src/components/Pages'>
                # React
            </a>
            <a className={classes.tag} href='/src/components/Pages'>
                # NodeJS
            </a>
            <a className={classes.tag} href='/src/components/Pages'>
                # Sass
            </a>
            <a className={classes.tag} href='/src/components/Pages'>
                # React
            </a>
            <a className={classes.tag} href='/src/components/Pages'>
                # NodeJS
            </a>
            <a className={classes.tag} href='/src/components/Pages'>
                # Sass
            </a>
        </div>
    );
};

export default Tags;