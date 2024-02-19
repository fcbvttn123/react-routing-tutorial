import { useOutletContext } from "react-router-dom"

export function HostVanInfo() {
    const {vanDetail} = useOutletContext()
    return (
        <div>
            <h4><span className="font-semibold">Name: </span>{vanDetail.name}</h4>
            <h4><span className="font-semibold">Category: </span>{vanDetail.type}</h4>
            <h4><span className="font-semibold">Description: </span>{vanDetail.description}</h4>
            <h4><span className="font-semibold">Visibility: </span>Public</h4>
        </div>
    )
}