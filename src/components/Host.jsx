import { Link, Outlet } from "react-router-dom"

export function Host() {
    return (
        <>
            <nav className="flex gap-x-4">
                <Link to="/host">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet />
        </>
    )
}