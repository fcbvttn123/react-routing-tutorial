import "../server"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export function Vans() {
    const [vans, setVans] = useState([])
    let vanComponents = vans.map(obj => (
        <div className="w-1/2 p-2" key={obj.id}>
            <Link to={`/vans/${obj.id}`}>
                <img className="rounded-md" src={obj.imageUrl} alt="" />
                <div className="flex justify-between">
                    <h2 className="text-2xl font-bold">{obj.name}</h2>
                    <p className="flex flex-col">
                        <span className="text-2xl font-bold">{obj.price}</span>
                        <span>/day</span>
                    </p>
                </div>
                <button className={`${obj.type == "simple" ? "bg-orange-600" : "bg-green-800"} text-orange-100 text-xl font-semibold px-4 py-1 rounded-md`}>
                    {obj.type}
                </button>
            </Link>
        </div>
    ))

    async function getVans() {
        let res = await fetch("/api/vans")
        let data = await res.json()
        return data.vans
    }

    useEffect(() => {
        async function setState() {
            let arr = await getVans()
            setVans(arr)
        }
        setState()
    }, [])

    return (
        <div className="flex flex-wrap">
            {vanComponents}
        </div>
    )
}