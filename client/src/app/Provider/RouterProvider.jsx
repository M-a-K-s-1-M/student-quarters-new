import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import GeneralLayout from "../Layout/GeneralLayout"
import Main from '../../page/Main/index'
import Reviews from '../../page/Reviews/index'
import Profile from '../../page/Profile/index'
import About from '../../page/About/index'

export default function RouterProvider() {
    return (
        <>

            <Routes>

                <Route path="/*" element={<GeneralLayout />}>

                    <Route index element={<Main />} />
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="about" element={<About />} />

                    <Route path="*" element={<Navigate to='/' replace />} />

                </Route>

            </Routes>


        </>
    )
}
