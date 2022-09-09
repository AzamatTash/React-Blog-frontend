import React from 'react';
import classes from './home.module.sass';
import Post from "../../components/Post";
import Tags from "../../components/Tags";

const Home = () => {
    return (
        <main>
            <div className={classes.left}>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <div className={classes.right}>
                <Tags/>
            </div>
        </main>
    );
};

export default Home;