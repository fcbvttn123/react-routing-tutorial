import { Outlet } from "react-router-dom"

export function Dashboard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Outlet />
        </>
    )
}