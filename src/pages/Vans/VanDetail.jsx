import { useEffect } from "react"
import { useParams, Link, useLocation } from "react-router-dom"
import "../../server"

export function VanDetail() {
    const param = useParams()
    const location = useLocation()

    async function getVanDetail(vanId) {
        let res = await fetch("/api/vans")
        let data = await res.json()
        return data.vans.find(obj => obj.id == vanId)
    }

    useEffect(() => {
        async function printVanDetail(id) {
            let van = await getVanDetail(id)
        }
        printVanDetail(param.id)
    }, [])
    return (
        <div>
            <Link to={`..?${location.state?.search || ""}`} relative="path" className="underline">Back</Link>
            <h1>Van Details go here</h1>
        </div>
    )
}