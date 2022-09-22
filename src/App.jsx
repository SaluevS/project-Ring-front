import React from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { Routes, Route } from 'react-router-dom'
import Discussions from './components/Discussions/Discussions';
import Header from './components/Header/Header';
import ThemeMap from './components/ThemeMap/ThemeMap';
import ThemeOne from './components/ThemeOne/ThemeOne';
import Home from './components/Home/Home';


const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/discussions' element={<Discussions />} />
      <Route path='/discussions/:id' element={<ThemeOne />} />
    </Routes>
    </>
  );
};

export default App;