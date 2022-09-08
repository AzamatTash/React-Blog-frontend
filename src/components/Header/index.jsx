import React from 'react';
import classes from './header.module.sass';
import {Link} from "react-router-dom";

const Header = () => {
    const isAuth = true;

    return (
        <header>
            <div className={classes.container}>
                <Link className={classes.left} to='/'>
                    <div className={classes.logo} >BLOG</div>
                </Link>

                {isAuth ?
                    <div>
                        <Link to='/add-post'>
                            <button className={classes.btn__create}>Создать пост</button>
                        </Link>
                        <Link to='/auth'>
                            <button className={classes.btn}>Выйти</button>
                        </Link>
                    </div> :
                    <Link to='/auth'>
                    <button className={classes.btn}>Войти</button>
                    </Link>
                }
            </div>
        </header>
    );
};

export default Header;