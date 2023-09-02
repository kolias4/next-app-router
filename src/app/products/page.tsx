import ProductCard from "@/components/ProductCard";
import ProductTable from "@/components/tables/ProductTable";
import { getProducts } from "@/lib/serverApi/productsApi";
import React from "react";

const ProductsPage = async ({searchParams }: any) => {
    console.log(searchParams,"searchparams")
    let page = searchParams.page? Number(searchParams.page) : 1
    var {products, limit, skip, total} = await getProducts(page);
  
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl my-6">Products</h1>
      {/* <ProductTable products={products} /> */}
      <div className="grid grid-cols-4 gap-5">

      {products.map(product => {
        return (
          <ProductCard title={product.title} price={product.price} id={product.id}   imageUrl={product.thumbnail} key={product.id}/>
        )
      })}
      </div>

    </main>
  );
};

export default ProductsPage;
