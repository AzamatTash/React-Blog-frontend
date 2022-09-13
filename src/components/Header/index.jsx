import React from 'react';
import classes from './header.module.sass';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {logout} from '../../redux/slices/auth';

import userAvatar from '../../assets/img/user.png';

const Header = () => {
    const [viewActivation, setViewActivation] = React.useState(false);
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.auth)
    const isNotAuth = data === null;

    const onClickLogout = () => {
        if(window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout());
            window.localStorage.removeItem('token')
        }
    };

    const handleClickAvatar = () => {
        setViewActivation(!viewActivation)
    }

    return (
        <header>
            <div className={classes.container}>
                <Link className={classes.left} to='/'>
                    <div className={classes.logo} >BLOG</div>
                </Link>
                {!isNotAuth ?
                    <div className={classes.right}>
                        <img onClick={handleClickAvatar} src={data.avatarUrl || userAvatar} className={classes.avatar} alt="avatar"/>
                        {
                            viewActivation &&
                            <div className={classes.view__avatar}>
                                {data.avatarUrl && <img onClick={handleClickAvatar} src={data.avatarUrl} className={classes.avatar__full} alt="fullAvatar"/>}
                                <div className={classes.name}>{data.fullName}</div>
                            </div>
                        }
                        <Link to='/add-post'>
                            <button className={classes.btn__create}>Создать пост</button>
                        </Link>
                        <Link to='/auth'>
                            <button onClick={onClickLogout} className={classes.btn}>Выйти</button>
                        </Link>
                    </div> :
                    <Link to='/auth' className={classes.right}>
                        <button className={classes.btn}>Войти</button>
                    </Link>
                }
            </div>
        </header>
    );
};

export default Header;