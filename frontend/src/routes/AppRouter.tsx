import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";
import SignupPage from "../pages/auth/SignupPage.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter