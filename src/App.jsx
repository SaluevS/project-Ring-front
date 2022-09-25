import React from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { Routes, Route, Navigate } from 'react-router-dom'
import Discussions from './components/Discussions/Discussions';
import ThemeOne from './components/ThemeOne/ThemeOne';
import Home from './components/Home/Home';
import Maps from './components/Maps/Maps';
import Card from './components/Card/Card';
import { useSelector } from 'react-redux';


const App = () => {
  const token = useSelector((state) => state.applicationSlice.token)

  if (token) {
    return (
      <>
        <Routes>
          <Route path='/shop' element={<Card />} />
          <Route path='/cart' element={<Maps />} />
          <Route path='/' element={<Home />} />
          <Route path='/auth' element={<SignUp />} />
          <Route path='/login' element={<Navigate to='/' />} />
          <Route path='/discussions' element={<Discussions />} />
          <Route path='/discussions/:id' element={<ThemeOne />} />
        </Routes>
      </>
    );
  }

  return (
    <>
      <Routes>
        <Route path='/shop' element={<Card />} />
        <Route path='/cart' element={<Maps />} />
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<SignUp />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/discussions' element={<Discussions />} />
        <Route path='/discussions/:id' element={<ThemeOne />} />
      </Routes>
    </>
  )

};

export default App;