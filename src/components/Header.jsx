import { Link } from 'react-router-dom';

export function Header() {
    return (
        <nav>
            <div className='w-11/12 h-20 mx-auto flex items-center justify-between'>
                <div>
                    <Link className='font-extrabold text-2xl' to="/">#VANLIFE</Link>
                </div>
                <nav className='flex gap-x-5'>
                    <Link className='font-semibold' to="/host">Host</Link>
                    <Link className='font-semibold' to="/about">About</Link>
                    <Link className='font-semibold' to="/vans">Vans</Link>
                </nav>
            </div>
        </nav>
    )
}