import React from 'react';
import classes from './tags.module.sass';

import Tag from './Tag';
import {useDispatch, useSelector} from "react-redux";
import {fetchTags} from "../../redux/slices/tags";

const Tags = () => {
    const dispatch = useDispatch();
    const {items, status} = useSelector(state => state.tags);
    const isTagsLoading = status === 'loading';
    const isTagsError = status === 'error';

    React.useEffect(() => {
        dispatch(fetchTags());
    }, []);

    return (
        <div className={classes.tags}>Tags:
            {
                isTagsError ? <div className={classes.notFound}>Теги не найдены</div>:
                (isTagsLoading ? [...Array(5)] : items).map((tag, index) =>
                    isTagsLoading ? <Tag key={index} isLoading={true}/> : <Tag key={index} tag={tag}/>
                )
            }
        </div>
    );
};

export default Tags;