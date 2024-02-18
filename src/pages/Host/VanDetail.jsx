import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export function VanDetail() {
    const [vanDetail, setVanDetail] = useState(null)
    console.log(vanDetail)
    
    let {id} = useParams()

    async function getVans() {
        let res = await fetch("/api/vans")
        let data = await res.json()
        let myVan = data.vans.find(obj => obj.id == id)
        setVanDetail(myVan)
    }

    useEffect(() => {
        getVans()
    }, [])
    return (
        <div className="bg-white p-4 mt-10">
            <div className="flex items-center gap-x-4">
                <img className="w-36 h-36" src={vanDetail.imageUrl} alt="" />
                <div>
                    <button className={`${vanDetail.type == "simple" ? "bg-orange-600" : "bg-green-800"} text-orange-100 text-xl font-semibold px-4 py-1 rounded-md mb-2`}>
                        {vanDetail.type}
                    </button>
                    <h1 className="font-bold text-2xl">{vanDetail.name}</h1>
                    <p className="text-slate-400 font-semibold">
                        <span className="text-black font-bold">${vanDetail.price}</span>/day
                    </p>
                </div>
            </div>
        </div>
    )
}