import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Amin style</h1>
      <div>
        <Link href="/Cart">Cart</Link>
      </div>
    </div>
  );
}