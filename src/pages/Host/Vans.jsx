import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Vans() {
    const [vans, setVans] = useState(null)

    let vanCards = null
    if(vans) {
        vanCards = vans.map(obj => (
            <div key={obj.id} className="bg-white mb-4 p-4 rounded-lg">
                <Link to={`/host/vans/${obj.id}`} className="flex items-center gap-x-4">
                    <img className="w-20 h-20" src={obj.imageUrl} alt="" />
                    <div>
                        <h1 className="font-bold">{obj.name}</h1>
                        <p className="text-slate-400 font-semibold">${obj.price}/day</p>
                    </div>
                </Link>
            </div>
        ))
    }

    async function getVans() {
        let res = await fetch("/api/vans")
        let data = await res.json()
        setVans(data.vans)
    }

    useEffect(() => {
        getVans()
    }, [])
    return (
        <>
            <h1 className="mt-8 mb-4 text-2xl font-semibold">Your listed vans</h1>
            {vanCards ? vanCards : <p className="mt-8 mb-4 text-2xl font-extrabold">Loading...</p>}
        </>
    )
}