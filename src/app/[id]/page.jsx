import Link from "next/link";

export default  async function View({params}){

    let{id} = await params;

    let response = await  fetch(`https://fakestoreapi.com/products/${id}`)

    let products = await response.json()

    return(<div>
            {products.category}

        <ul>
            <img src={products.image} alt={products.title}></img>
            <li>{products.description}</li>
            <li>{products.title}</li>
            <li>{products.price}</li>
        </ul>
        
        <Link href={"/"}>back to shop</Link>
    </div>)
}