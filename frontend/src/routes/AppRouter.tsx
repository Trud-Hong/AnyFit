import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage.tsx";
import SignupPage from "../pages/auth/SignupPage.tsx";
import SessionManagementPage from "../pages/session/SessionManagementPage.tsx";

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/signup" element={<SignupPage/>}/>
                <Route path="/session" element={<SessionManagementPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default AppRouter