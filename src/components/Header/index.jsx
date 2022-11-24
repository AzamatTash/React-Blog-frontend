import React from 'react';
import classes from './header.module.sass';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {fetchPosts} from '../../redux/slices/posts';
import {MyContext} from '../../App';
import sideBarIcon from '../../assets/img/sideBar.png';
import {setFilter, setSort} from '../../redux/slices/sort';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filterItems = ['Все посты', 'По тегу'];
    const {activeFilter, setActiveFilter, viewSideBar, setViewSideBar} = React.useContext(MyContext);

    const onClickFilter = (index) => {
        setActiveFilter(index);
        navigate('/');
        dispatch(fetchPosts());
        dispatch(setSort(
            {
                sortType: '',
                description: 'По уполчанию'
            }
        ));
        dispatch(setFilter(''));
    };

    return (
        <header>
            <div className={classes.container}>
                <div className={classes.filter}>
                    {
                        filterItems.map((el, index) => <div
                            key={index}
                            onClick={() => filterItems[0] === el && onClickFilter(index)}
                            className={filterItems[activeFilter] === el ? classes.active : classes.item}>{el}</div>)
                    }
                </div>
                <img src={sideBarIcon} className={classes.icon} onClick={() =>setViewSideBar(!viewSideBar)} alt="<-"/>
            </div>
        </header>
    );
};

export default Header;