import Link from "next/link";
import styles from "../../css/header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Amin style</h1>
      <div>
        <Link href="/component/cart">Cart</Link>
      </div>
    </div>
  );
}