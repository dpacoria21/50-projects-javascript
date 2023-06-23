import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/Navbar";
import { LoginPage } from "./LoginPage";
import { RegisterPage } from "./RegisterPage";
import { MoviesPage } from "./MoviesPage";

export const MainPage = () => {
    return (
        <>
        
            <Navbar />

            <Routes>
                <Route path="/" element={<MoviesPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />}  />
                <Route path="/*" element={<Navigate to={'/'}/>} />
            </Routes>

        </>
    )
}