import React from 'react';
import classes from './fullPost.module.sass';
import {api} from "../../axios";
import {useParams} from 'react-router-dom';

import Post from '../../components/Post';
import PreloaderFullPost from './PreloaderFullPost';

const FullPost = () => {
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);

    const {id} = useParams();

    React.useEffect(() => {
        api.getOnePost(id).then((res) => {
            setData(res.data);
            setLoading(false);
        }).catch(() => {
            alert('Не удалось найти данный пост');
        })
    },[])

    return (
        <div className={classes.content}>
            {isLoading ? <PreloaderFullPost/> :
                <Post key={data._is}
                   img={data.imageUrl}
                   tags={data.tags}
                   title={data.title}
                   viewsCount={data.viewsCount}
                >
                    <p>{data.text}</p>
                </Post>}
        </div>
    );
};

export default FullPost;