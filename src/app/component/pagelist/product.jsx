import Link from "next/link";
import styles from "./product.module.css";

export default function Product({ product }) {
  return (
    <div className={styles.container}>
      <div>
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <h1>{product.title}</h1>
        <h2>${product.price}</h2>
      </div>
      <button>Add to Cart 🛒</button>
      <Link href={"/"}>View More →</Link>
    </div>
  );
}