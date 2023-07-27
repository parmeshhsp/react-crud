import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom' /* { } => const / typed /named imports */
import Menu from './component/Menu' /* default imports */
import Create from './component/Create'
import Home from './component/Home'
import Pnf from './component/Pnf'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Update from './component/Update'
import PrivateRouter from './PrivateRoute/PrivateRouter'

function App(props) {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route element={<PrivateRouter />}>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/create`} element={<Create />} />
                    <Route path={`/update/:`} element={<Update />} />
                </Route>

                <Route path={`/Login`} element={<Login />} />
                <Route path={`/Register`} element={<Register />} />
                <Route path={`/*`} element={<Pnf />} />
            </Routes>
        </BrowserRouter>

    )
}

export default App