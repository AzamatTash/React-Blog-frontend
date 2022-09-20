import React from 'react';
import classes from './Sidebar.module.sass'
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import {logout} from '../../redux/slices/auth';
import Tags from '../Tags';
import userAvatar from '../../assets/img/user.png';
import {MyContext} from '../../App';

const Sidebar = () => {
    const dispatch = useDispatch();
    const {data} = useSelector(state => state.auth)
    const isNotAuth = data === null;
    const {viewSideBar, setViewSideBar} = React.useContext(MyContext)

    const onClickLogout = () => {
        if(window.confirm('Вы действительно хотите выйти?')) {
            dispatch(logout());
            window.localStorage.removeItem('token')
        }
    };

    const [touchStart, setTouchStart] = React.useState(0);
    const [touchEnd, setTouchEnd] = React.useState(0);

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (touchStart - touchEnd < -150) {
            setViewSideBar(!viewSideBar)
        }
    };

    return (
        <div className={viewSideBar ? classes.wrapper__active : classes.wrapper}
             onTouchStart={handleTouchStart}
             onTouchMove={handleTouchMove}
             onTouchEnd={handleTouchEnd}>
            <Link className={classes.header} to='/'>
                <div className={classes.logo} onClick={() => setViewSideBar(!viewSideBar)}>BLOG</div>
            </Link>
            <div className={classes.main}>
                {!isNotAuth &&
                    <>
                        <img src={data.avatarUrl || userAvatar}
                             className={classes.avatar} alt="avatar"/>
                        <div className={classes.name}>{data.fullName}</div>
                        <Link to='/add-post'>
                            <button className={classes.btn__create}
                                    onClick={() => setViewSideBar(!viewSideBar)}
                            >+ Новый пост</button>
                        </Link>

                    </>
                }
                <Tags/>
            </div>
            <div className={classes.footer}>
                {!isNotAuth ?
                    <Link to='/auth'>
                        <button onClick={onClickLogout} className={classes.btn}>Выйти</button>
                    </Link> :
                    <Link to='/auth'>
                        <button className={classes.btn}
                                onClick={() =>setViewSideBar(!viewSideBar)}
                        >Войти</button>
                    </Link>}
            </div>
        </div>
    );
};

export default Sidebar;
