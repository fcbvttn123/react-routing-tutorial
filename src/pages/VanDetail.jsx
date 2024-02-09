import { useParams } from "react-router-dom"

export function VanDetail() {
    const id = useParams()
    console.log(id)
    return <h1>Van Details go here</h1>
}