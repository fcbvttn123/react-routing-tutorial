import { NavLink, Outlet } from "react-router-dom"

export function Host() {
    let activeLinkStyle = {
        fontWeight: "bold", 
        textDecoration: "underline", 
        color: "#161616"
    }
    return (
        <div className="px-4 mb-20">
            <nav className="flex gap-x-4">
                <NavLink style={(obj) => obj.isActive ? activeLinkStyle : null} to="." end>
                    Dashboard
                </NavLink>
                <NavLink style={(obj) => obj.isActive ? activeLinkStyle : null} to="income">
                    Income
                </NavLink>
                <NavLink style={(obj) => obj.isActive ? activeLinkStyle : null} to="vans">
                    Vans
                </NavLink>
                <NavLink style={(obj) => obj.isActive ? activeLinkStyle : null} to="reviews">
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}