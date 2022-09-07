import React from 'react';
import classes from './header.module.sass';
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <header>
            <div className={classes.container}>
                <Link className={classes.left} to='/'>
                    <div className={classes.logo} >BLOG</div>
                </Link>

                <Link to='/auth'>
                    <button className={classes.btn}>Войти</button>
                </Link>
            </div>
        </header>
    );
};

export default Index;