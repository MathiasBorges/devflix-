import MoviesPage from "../src/AcessoPage/MoviesPage";
import HomePage from "../src/HomePage/HomePage";
import LoginPage from "../src/LoginPage/LoginPage";
import SignPage from "../src/SignPage/SignPage";

import {HashRouter as Router, Routes, Route} from "react-router-dom"

function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/login" element={<LoginPage/>}></Route>
                <Route path="/sign" element={<SignPage/>}></Route>
                <Route path="/acesso" element={<MoviesPage/>}></Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;