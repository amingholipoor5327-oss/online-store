"use client";

import { createContext, useEffect, useState } from "react";

export const cartcontext = createContext();

export default function Cartprovider({ children }) {
  const [cart, setCart] = useState([]);


  useEffect(()=>{

    let storage = localStorage.getItem("cart")
    if(storage){
     setCart(JSON.parse(storage)) 
    }
  },[])


  useEffect(()=>{

    localStorage.setItem("cart" , JSON.stringify(cart))
  },[cart])
  // افزودن محصول به سبد خرید
  function addcart(product) {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...product, quantity: 1 }];
    });
  }

  // حذف محصول از سبد خرید
  function removecart(productId) {
    setCart((prev) =>
      prev.filter((item) => item.id !== productId)
    );
  }

  // تغییر تعداد محصول
  function updatecart(productId, newQuantity) {
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  }

function totalprice() {
  return cart.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
}

  // خالی کردن سبد خرید
  function clearcart() {
    setCart([]);
  }

  return (
    <cartcontext.Provider
      value={{
        cart,
        addcart,
        removecart,
        updatecart,
        clearcart,
        totalprice
      }}
    >
      {children}
    </cartcontext.Provider>
  );
}