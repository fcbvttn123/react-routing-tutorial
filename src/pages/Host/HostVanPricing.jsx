import { useOutletContext } from "react-router-dom"

export function HostVanPricing() {
    const {vanDetail} = useOutletContext()
    return <h1 className="text-2xl"><span className="font-semibold">${vanDetail.price}</span>/day</h1>
}