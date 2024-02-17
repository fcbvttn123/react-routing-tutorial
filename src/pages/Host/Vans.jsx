import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Vans() {
    const [vans, setVans] = useState(null)

    let vanCards = null
    if(vans) {
        vanCards = vans.map(obj => (
            <div key={obj.id}>
                <Link to={`/host/vans/${obj.id}`}>
                    <img src={obj.imageUrl} alt="" />
                    <h1>{obj.name}</h1>
                    <p>${obj.price}/day</p>
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
            <h1>Host Van List Page</h1>
            {vanCards && vanCards}
        </>
    )
}