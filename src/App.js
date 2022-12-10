import React from 'react';
import classes from './App.module.sass';
import {Route, Routes} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Header from './components/Header';
import Sidebar from './components/Sidebar'
import Home from './Pages/Home';
import FullPost from './Pages/FullPost';
import Login from './Pages/Login';
import Register from './Pages/Registration';
import AddPost from './Pages/AddPost';
import {fetchAuthMe} from './redux/slices/auth';

export const MyContext = React.createContext('');

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => dispatch(fetchAuthMe()),[]);

    const [activeFilter, setActiveFilter] = React.useState(0);
    const [viewSideBar, setViewSideBar] = React.useState(false);

    return (
        <div>
            <MyContext.Provider value={{activeFilter, setActiveFilter, viewSideBar, setViewSideBar}}>
                <Header/>
                <Sidebar/>
                <div className={classes.container}>
                    <Routes>
                        <Route path='/' element={<Home/>}/>
                        <Route path='/post/:id' element={<FullPost/>}/>
                        <Route path='/auth' element={<Login/>}/>
                        <Route path='/register' element={<Register/>}/>
                        <Route path='/post/:id/edit' element={<AddPost/>}/>
                        <Route path='/add-post' element={<AddPost/>}/>
                    </Routes>
                </div>
            </MyContext.Provider>
        </div>
    );
};

export default App;
