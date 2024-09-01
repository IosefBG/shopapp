import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
// @ts-ignore
import Home from "@/pages/home/Home.tsx";
// @ts-ignore
import Login from "@/pages/login/Login.tsx";
import UsersLayout from "./layouts/users-layout.tsx";
import Register from "./pages/register/Register.tsx";

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
