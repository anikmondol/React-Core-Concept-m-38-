import './Book.css'
export default function Books({book}){
    const {name, price} = book;
    return (
        <div className='book'>
            <h2>Name: {name}</h2>
            <p>price: {price}</p>
        </div>
    )
}