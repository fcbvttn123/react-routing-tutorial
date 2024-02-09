import { useEffect } from "react"
import { useParams } from "react-router-dom"
import "../server"

export function VanDetail() {
    const param = useParams()

    async function getVanDetail(vanId) {
        let res = await fetch("/api/vans")
        let data = await res.json()
        return data.vans.find(obj => obj.id == vanId)
    }

    useEffect(() => {
        async function printVanDetail(id) {
            let van = await getVanDetail(id)
            console.log(van)
        }
        printVanDetail(param.id)
    }, [])
    return <h1>Van Details go here</h1>
}