import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
//import usePageTracking from "../hooks/usePageTracking";

export default function Layout() {
    // usePageTracking()

    return (
        <div className="app">
            <Navbar></Navbar>
            <main className="main-content">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    )
}