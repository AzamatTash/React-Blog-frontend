import React from 'react';
import classes from './App.module.sass';
import {Route, Routes} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Header from './components/Header';
import Home from './Pages/Home';
import FullPost from './Pages/FullPost';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import AddPost from './Pages/AddPost';
import {fetchAuthMe} from './redux/slices/auth';

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(fetchAuthMe());
    }, []);

    return (
        <div>
            <Header/>
            <div className={classes.container}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/post/:id' element={<FullPost/>}/>
                    <Route path='/auth' element={<Login/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/add-post' element={<AddPost/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
