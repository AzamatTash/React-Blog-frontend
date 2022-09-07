import classes from './App.module.sass';
import {Route, Routes} from "react-router-dom";

import Header from "./components/Header";
import Home from "./Pages/Home/Home";
import FullPost from "./Pages/FullPost";
import Login from "./Pages/Login";
import Register from "./Pages/Registration";


function App() {
  return (
      <div>
          <Header/>
          <div className={classes.container}>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/post/:id' element={<FullPost/>}/>
                  <Route path='/auth' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
              </Routes>
          </div>
      </div>
  );
}

export default App;
