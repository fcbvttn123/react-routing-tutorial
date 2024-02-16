import { NavLink, Outlet } from "react-router-dom"

export function Host() {
    let activeLinkStyle = {
        fontWeight: "bold", 
        textDecoration: "underline", 
        color: "#161616"
    }
    return (
        <>
            <nav className="flex gap-x-4">
                <NavLink style={(obj) => obj.isActive ? activeLinkStyle : null} to="/host" end>
                    Dashboard
                </NavLink>
                <NavLink style={(obj) => obj.isActive ? activeLinkStyle : null} to="/host/income">
                    Income
                </NavLink>
                <NavLink style={(obj) => obj.isActive ? activeLinkStyle : null} to="/host/reviews">
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </>
    )
}