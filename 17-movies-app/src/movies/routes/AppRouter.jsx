import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui/components/Navbar"
import { MoviesPage } from "../pages/MoviesPage"
import { LoginPage, RegisterPage } from "../../auth/pages"
import { MovieInformationPage } from "../pages/MovieInformationPage"

export const AppRouter = () => {
    return (
        <>

            <Navbar />

            <Routes>
                <Route path="/movie" element={<MoviesPage />} />
                <Route path="/movie/:id" element={<MovieInformationPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/*" element={<Navigate to={'/movie'} />} />
            </Routes>

        </>
    )
}