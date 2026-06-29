import Link from "next/link";
import styles from "../css/details.module.css"
export default  async function View({params}){

    let{id} = await  params;

    let response = await  fetch(`https://fakestoreapi.com/products/${id}`)

    if(!response.ok){
        throw new Error("falid page ")
    }

    let products = await response.json()

    return(
    <div className={styles.container}>

        <h1>{products.category}</h1>
        <div>
            <img src={products.image} alt={products.title}></img>
            {products.title} 
            <h3>price: {products.price}$</h3>  
        </div>
          
        <h2>
            {products.description} 
        </h2>

         
             
         
        <Link className={styles.button} href={"/"}>back to shop</Link>
    </div>)
}