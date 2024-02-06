export function Vans({data}) {
    return (
        <div>
            <img src={data.imageUrl} alt="" />
            <h2>{data.name}</h2>
            <p>{data.price}/day</p>
            <button>{data.type}</button>
        </div>
    )
}