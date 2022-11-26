import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, RouterProvider } from 'react-router-dom';
import * as React from "react"; 
import Dashboard from './components/Dashboard'
import Error from './components/Error'
import SharedLayout from './pages/SharedLayout'
import ProtectedRoute from './lib/Protectedroute'
import Login from './pages/Login';
import MasterData from './pages/MasterData'
import User from './pages/User'
import Profile from './pages/user/Profile'
import { Level } from './pages/level/Index';
import FormLevel from './pages/level/Form';
// import 

export default function Web() {
    const [user, setUser] = useState(null);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
                    <Route index element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                </Route>

                <Route path='/app' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
                    <Route index element={<ProtectedRoute><MasterData /></ProtectedRoute>} />
                    <Route path='/app/user' element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path='/app/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path='/app/level' element={<ProtectedRoute><Level /></ProtectedRoute>} />
                    <Route path='/app/level/create' element={<ProtectedRoute><FormLevel /></ProtectedRoute>} />

                </Route>
 

                <Route path='/master' element={<ProtectedRoute><SharedLayout /></ProtectedRoute>}>
                    <Route index element={<ProtectedRoute><MasterData /></ProtectedRoute>} />
                    <Route path='/master/barang' element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path='/master/jenisbarang' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                    <Route path='/master/purchaseoorder' element={<ProtectedRoute><Profile /></ProtectedRoute>} />
                </Route>
 
                <Route>
                    <Route path='login' element={<Login setUser={setUser}></Login>} />
                </Route>
                <Route>
                    <Route path='*' element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );

}