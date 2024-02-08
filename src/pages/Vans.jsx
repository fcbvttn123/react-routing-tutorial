import "../server"
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export function Vans() {
    const [vans, setVans] = useState([])
    let vanComponents = vans.map(obj => (
        <div key={obj.id}>
            <Link to={`/vans/${obj.id}`}>
                <img src={obj.imageUrl} alt="" />
                <h2>{obj.name}</h2>
                <p>{obj.price}/day</p>
                <button>{obj.type}</button>
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

    return vanComponents
}