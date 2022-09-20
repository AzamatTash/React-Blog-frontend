import React from 'react';
import classes from './home.module.sass';
import {useDispatch, useSelector} from 'react-redux';

import Post from '../../components/Post';
import {fetchPosts} from '../../redux/slices/posts';

const Home = () => {
    const dispatch = useDispatch();
    const {items, status} = useSelector(state => state.posts);

    const isPostsLoading = status === 'loading';
    const isPostsError = status === 'error';

    React.useEffect(() => {
        dispatch(fetchPosts());
    },[]);

    return (
        <main>
            <div className={classes.content}>
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
        </main>
    );
};

export default Home;
