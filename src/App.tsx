import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersLayout from "./layouts/users-layout.tsx";
import Register from "./pages/register/Register.tsx";
import Home from "./pages/home/Home.tsx";
import Login from "./pages/login/Login.tsx";

const App = () => {
    return (
        <BrowserRouter>
            <div style={{height: '100vh'}}>
                <Routes>
                    <Route path="/" element={<UsersLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App
