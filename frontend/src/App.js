// frontend/src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import PostJob from './components/PostJob';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/post-job" element={<PostJob />} />
            </Routes>
        </div>
    );
};

export default App;
