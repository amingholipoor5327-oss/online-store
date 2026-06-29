"use client"
import Link from "next/link";
import styles from "../../css/product.module.css";
import { useContext } from "react";
import {cartcontext} from "../context/context"
export default function Product({ product }) {

  const{addcart} = useContext(cartcontext)
  return (
    <div className={styles.container}>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
      </div>
      <button onClick={()=>{
        addcart(product)
        confirm("are you sure?")
      }}>Add to Cart 🛒</button>
      <Link href={`/${product.id}`}>View More →</Link>
    </div>
  );
}