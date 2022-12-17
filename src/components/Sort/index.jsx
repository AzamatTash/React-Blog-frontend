import React from 'react';
import classes from './sort.module.sass';
import {useDispatch, useSelector} from 'react-redux';

import {setSort} from '../../redux/slices/sort';

const Sort = () => {
    const dispatch = useDispatch();
    const {sort} = useSelector(state => state.sort);
    const [active, setActive] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const list = [
        {
            sortType: '',
            description: 'По умолчанию'
        },
        {
            sortType: 'title',
            description: 'По названию'
        },
        {
            sortType: 'views',
            description: 'По популярности'
        },
        {
            sortType: 'date',
            description: 'Сначала старые'
        }
    ];

    React.useEffect(() => {
        const currentSort = list[active];
        dispatch(setSort(currentSort));
    },[active]);

    return (
        <div className={open ? classes.wrapperOpen : classes.wrapper}
             onClick={() => setOpen(!open)} tabIndex={0} onBlur={() => setOpen(false)}>
            <div className={classes.title}>Сортировка:</div>
            <div className={classes.activeSort}>{sort.description}</div>
            <ul className={classes.list}>
                {
                    list.map((obj, index) => (
                        <li key={index} className={classes.sort} onClick={() => setActive(index)}>{obj.description}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Sort;