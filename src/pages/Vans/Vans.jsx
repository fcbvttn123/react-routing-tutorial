import "../../server"
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from "react-router-dom";

export function Vans() {
    const [vans, setVans] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()

    let typeFilter = searchParams.get("type")

    let vanComponents = vans.map(obj => {
        if(typeFilter) {
            return (
                obj.type.toUpperCase() == typeFilter.toUpperCase() &&
                <div className="w-1/2 p-2" key={obj.id}>
                    <Link to={obj.id} state={{search: searchParams.toString()}}>
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
            )
        } else {
            return (
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
            )
        }
    })

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
        <div>
            <div className="flex gap-x-2">
                {/* <Link to="?type=simple">Simple</Link>
                <Link to="?type=rugged">Rugged</Link>
                <Link to="?type=luxury">Luxury</Link>
                <Link to=".">Clear</Link> */}

                <button className={typeFilter == "simple" ? "bg-black text-white": null} onClick={() => setSearchParams({type: "simple"})}>Simple</button>
                <button className={typeFilter == "rugged" ? "bg-black text-white": null} onClick={() => setSearchParams({type: "rugged"})}>Rugged</button>
                <button className={typeFilter == "luxury" ? "bg-black text-white": null} onClick={() => setSearchParams({type: "luxury"})}>Luxury</button>
                {typeFilter && <button onClick={() => setSearchParams({})}>Clear</button>}
            </div>
            <div className="flex flex-wrap">
                {vanComponents}
            </div>
        </div>
    )
}