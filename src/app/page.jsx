 import Productlist from "./component/pagelist/productlist"
export default async function Home() {

  let response = await fetch("https://fakestoreapi.com/products/")

  let product = await response.json()
  return (
    <div>
       <Productlist product={product}></Productlist>
    </div>
  );
}
