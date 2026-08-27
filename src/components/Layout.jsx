import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
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