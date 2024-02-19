import { useOutletContext } from "react-router-dom"

export function HostVanPhoto() {
    const {vanDetail} = useOutletContext()
    return <img src={vanDetail.imageUrl} alt="" />
}