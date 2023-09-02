import authFetch from "@/lib/authFetch";
import type { Product } from "@/types/product";


type ProductResponse = {
  products:Product[],
  limit:number,
  skip:number,
  total:number

}

export async function getProducts(page:number = 1, limit:number = 10): Promise<ProductResponse> {
  let skip = (page - 1)* limit
  return await authFetch<ProductResponse>(`/products?limit=${limit}&skip=${skip}`);
}