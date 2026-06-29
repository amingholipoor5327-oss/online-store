"use client";

import { useContext } from "react";
import { cartcontext } from "../context/context";
import Link from "next/link";

export default function Cart() {
  const { cart, removecart , updatecart , totalprice,clearcart  } = useContext(cartcontext);

  return (
    <div>
      {cart.length === 0 ? (
        <h1>Cart Item Not Found</h1>
      ) : (
        cart.map((product) => (
          <div key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              width={150}
            />

            <h1>${product.price}</h1>
            <h2>{product.title}</h2>

            <input type="number"
            value={product.quantity}
            min={1}
            onChange={(e)=>updatecart(product.id , Number(e.target.value))}
            />
            <h3> total price : {totalprice().toFixed(2)}</h3>

            <button onClick={() => removecart(product.id)}>
              Remove
            </button>
         
          </div>
        ))
      )}
      <Link href={"/"}>back to shop</Link>
      <button onClick={()=>clearcart()}> delete all</button>
    </div>
  );
}