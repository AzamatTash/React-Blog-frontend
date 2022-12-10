import React from 'react';
import classes from './addPost.module.sass';
import Editor from '../../components/Editor/Editor';
import {Field, Form, Formik} from 'formik';
import {api} from '../../axios';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {MyContext} from '../../App';

const AddPost = () => {
    const {setActiveFilter} = React.useContext(MyContext);

    const navigate = useNavigate();
    const {id} = useParams();
    const {data} = useSelector(state => state.auth);
    const isNotAuth = data === null;

    const [text, setText] = React.useState();
    const [imageUrl, setImageUrl] = React.useState();
    const initialValues = {
        titleField: '',
        tagsField: ''
    };

    React.useEffect(() => setActiveFilter(0), []);
    React.useEffect(() => {
        if(id) {
            const fetchPost = async () => {
                const {data} = await api.getOnePost(id);
                setText(data.text);
                setImageUrl(data.imageUrl);
                initialValues.titleField = data.title;
                initialValues.tagsField = data.tags.join(',');
            };
            fetchPost().catch(() => alert('Не удалось найти данный пост'));
        }
    }, [])

    const inputFileRef = React.useRef(null);
    const handleChangeFile = async (e) => {
        try {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append('image', file);
            const {data} = await api.uploadImg(formData);
            setImageUrl('https://react-blog-backend-3emf.onrender.com' + data.url);
        } catch (err) {
            alert('Ошибак при загрузке изображения');
        }
    };
    const onClickRemoveImage = () => setImageUrl('');

    const onChangeText = (value) => setText(value);

    const onSubmit = async (values) => {
        const fields = {
            title: values.titleField,
            tags: values.tagsField.split(','),
            imageUrl,
            text
        };

        if(id) {
            try {
                await api.changePost(id , fields);
            } catch (err) {
                alert('Ошибка при изменении поста!')
            }
            navigate(`/post/${id}`);
        } else {
            try {
                await api.uploadPost(fields);
            } catch(err) {
                alert('Ошибка при создание поста!');
            }
            navigate('/');
        }
    };

    if(window.localStorage.getItem('token') && isNotAuth) return <Navigate to='/'/>

    return (
        <div className={classes.wrapper}>
            <button type='submit' className={classes.btn} onClick={() => inputFileRef.current.click()}>
                + Добавить превью
            </button>
            <input ref={inputFileRef} type="file" onChange={handleChangeFile} hidden />
            {imageUrl && (
                <>
                    <button className={classes.btn__del} onClick={onClickRemoveImage}>
                        Удалить
                    </button>
                    <img className={classes.image} src={imageUrl} alt='Uploaded' />
                </>
            )}
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className={classes.group}>
                        <Field className={classes.input} type='text' name='titleField'
                               component='input' placeholder=' '/>
                        <label htmlFor='title' className={classes.label}>Заголовок</label>
                    </div>
                    <div className={classes.group}>
                        <Field className={classes.input} type='text' name='tagsField'
                               component='input' placeholder=' '/>
                        <label htmlFor='tags' className={classes.label}>Теги</label>
                    </div>
                    <Editor onChange={onChangeText} value={text}/>
                    {id ? <button type='submit' className={classes.btn}>Сохранить</button>:
                        <button type='submit' className={classes.btn}>Опубликовать</button>}
                </Form>
            </Formik>
        </div>
    );
};

export default AddPost;