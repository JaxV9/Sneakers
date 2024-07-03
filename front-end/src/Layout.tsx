import { Outlet } from "react-router"
import { Header } from "./features/header/Header"

export const Layout  = () => {
    return (
        <>
            <div className="page-content">
                <Header />
                    <div className="content">
                        <Outlet /> 
                    </div>
            </div>
        </>
    )
}