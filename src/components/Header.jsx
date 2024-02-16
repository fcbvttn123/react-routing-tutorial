import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <nav>
            <div className='w-11/12 h-20 mx-auto flex items-center justify-between'>
                <div>
                    <NavLink className='font-extrabold text-2xl' to="/">#VANLIFE</NavLink>
                </div>
                <nav className='flex gap-x-5'>
                    <NavLink className={(obj) => obj.isActive ? "font-extrabold underline" : "font-semibold"} to="/host">Host</NavLink>
                    <NavLink className={(obj) => obj.isActive ? "font-extrabold underline" : "font-semibold"} to="/about">About</NavLink>
                    <NavLink className={(obj) => obj.isActive ? "font-extrabold underline" : "font-semibold"} to="/vans">Vans</NavLink>
                </nav>
            </div>
        </nav>
    )
}