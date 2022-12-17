import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import ReactMarkdown from 'react-markdown';

import {api} from '../../axios';
import Post from '../../components/Post';
import PreloaderFullPost from './PreloaderFullPost';

const FullPost = () => {
    const [data, setData] = React.useState();
    const [isLoading, setLoading] = React.useState(true);
    const userData = useSelector(state => state.auth.data);

    const {id} = useParams();

    React.useEffect(() => {
        const fetchPost = async () => {
            const {data} = await api.getOnePost(id);
            setData(data);
            setLoading(false);
        };
        fetchPost().catch(() => alert('Не удалось найти данный пост'));
    },[]);

    return (
        <div>
            {isLoading ? <PreloaderFullPost/> :
                <Post key={data._id}
                      id={data._id}
                      img={data.imageUrl}
                      tags={data.tags}
                      title={data.title}
                      viewsCount={data.viewsCount}
                      user={data.user}
                      date={data.createdAt}
                      isEditable={userData?._id === data.user._id}
                >
                    <ReactMarkdown children={data.text}/>
                </Post>}
        </div>
    );
};

export default FullPost;