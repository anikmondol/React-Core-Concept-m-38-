export default function Singers({singer}){
    return(
        <div>
            <h2>Name: {singer.name}</h2>
            <h4>Id {singer.id}</h4>
            <h3>age: {singer.age}</h3>

        </div>
    )
}