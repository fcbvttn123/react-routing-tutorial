export function Header() {
    return (
        <nav>
            <div className='w-11/12 h-20 mx-auto flex items-center justify-between'>
                <Link className='font-extrabold text-2xl' to="/">#VANLIFE</Link>
                <Link className='ml-auto mr-6 font-semibold' to="/about">About</Link>
                <Link className='font-semibold' to="/vans">Vans</Link>
            </div>
        </nav>
    )
}