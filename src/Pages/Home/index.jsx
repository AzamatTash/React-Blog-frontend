import React from 'react';
import classes from './home.module.sass';
import {useDispatch, useSelector} from 'react-redux';

import Post from '../../components/Post';
import Tags from '../../components/Tags';
import {fetchPosts} from '../../redux/slices/posts';

const Home = () => {
    const dispatch = useDispatch();
    const {items, status} = useSelector(state => state.posts);
    const [activeFilter, setActiveFilter] = React.useState(0);
    const filterPosts = ['Все посты', 'По тегу'];

    const isPostsLoading = status === 'loading';
    const isPostsError = status === 'error';

    React.useEffect(() => {
        dispatch(fetchPosts());
    },[]);

    const onClickFilter = (index) => {
        setActiveFilter(index);
        dispatch(fetchPosts());
    }

    return (
        <main>
            <div className={classes.left}>
                <div className={classes.filter}>
                    {
                        filterPosts.map((el, index) => <div
                            key={index}
                            onClick={() => filterPosts[0] === el && onClickFilter(index)}
                            className={filterPosts[activeFilter] === el ? classes.active : classes.item}>{el}</div>)
                    }
                </div>
                {
                    isPostsError ? <div className={classes.notFound}>Посты не найдены</div> :
                    (isPostsLoading ? [...Array(5)] : items).map((post, index) =>
                        isPostsLoading ? <Post key={index} isLoading={true}/> :
                            <Post key={post._id}
                                  id={post._id}
                                  img={post.imageUrl}
                                  title={post.title}
                                  text={post.text}
                                  tags={post.tags}
                                  viewsCount={post.viewsCount}
                            />
                    )
                }
            </div>
            <div className={classes.right}>
                <Tags setActiveFilter={setActiveFilter}/>
            </div>
        </main>
    );
};

export default Home;
