import Product from "./product";
import styles from "./productlist.module.css";

export default function Productlist({ product }) {
  return (
    <div className={styles.gridContainer}>
      {product.map((products) => (
        <Product key={products.id} product={products} />  
      ))}
    </div>
  );
}