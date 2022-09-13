import React from 'react';
import classes from './addPost.module.sass';
import Editor from '../../components/Editor/Editor';
import {Field, Form, Formik} from 'formik';
import {api} from '../../axios';
import {Navigate, useNavigate} from 'react-router-dom';
import {useSelector} from "react-redux";

const AddPost = () => {
    const navigate = useNavigate();
    const {data} = useSelector(state => state.auth)
    const isNotAuth = data === null;
    const [text, setText] = React.useState('');
    const [imageUrl, setImageUrl] = React.useState('');
    const inputFileRef = React.useRef(null);
    const initialValues = {
        title: '',
        tags: ''
    }

    const onChange = (value) => {
        setText(value)
    };

    const handleChangeFile = async (e) => {
        try {
            const formData = new FormData();
            const file = e.target.files[0];
            formData.append('image', file);
            const {data} = await api.uploadImg(formData);
            setImageUrl(data.url);
        } catch (err) {
            alert('Ошибак при загрузке каринки')
        }
    };

    const onClickRemoveImage = () => {
        setImageUrl('');
    };

    const onSubmit = async (values) => {
        try {
            const fields = {
                title: values.title,
                tags: values.tags,
                imageUrl,
                text
            };
            const {data} = await api.uploadPost(fields);
            const id = data._id;
            navigate(`posts/${id}`)
        } catch(err) {
            alert('Ошибка при создание поста')
        }
    };

    if(window.localStorage.getItem('token') && isNotAuth) {
        return <Navigate to='/'/>
    }

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
                    <img className={classes.image} src={imageUrl} alt="Uploaded" />
                </>
            )}
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                <Form>
                    <div className={classes.group}>
                        <Field className={classes.input} type='text' name='title'
                               component='input' placeholder=' '/>
                        <label htmlFor='title' className={classes.label}>Заголовок</label>
                    </div>
                    <div className={classes.group}>
                        <Field className={classes.input} type='text' name='tags'
                               component='input' placeholder=' '/>
                        <label htmlFor='tags' className={classes.label}>Теги</label>
                    </div>
                    <Editor onChange={onChange}/>
                    <button type='submit' className={classes.btn}>Опубликовать</button>
                </Form>
            </Formik>
        </div>
    );
};

export default AddPost;