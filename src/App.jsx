import React from 'react';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import { Routes, Route } from 'react-router-dom'
import Discussions from './components/Discussions/Discussions';
import Theme from './components/Theme/Theme';
import ThemeMap from './components/ThemeMap/ThemeMap';

const App = () => {
  return (
    <Routes>
      <Route path='/auth' element={<SignUp />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/discussions' element={<Discussions />} />
      <Route path='/theme' element={<ThemeMap />} />
    </Routes>
  );
};

export default App;