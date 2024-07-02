import { Outlet } from "react-router"
import { Footer } from "./features/header/Footer"
import { Header } from "./features/header/Header"

export const Layout  = () => {
    return (
        <>
            <div className="page-content">
                <Header />
                    <div className="content">
                        <Outlet /> 
                    </div>
                <Footer />
            </div>
        </>
    )
}