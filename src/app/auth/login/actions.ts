'use server';
import { cookies } from 'next/headers';

 
export async function myAction(values:any) {
    console.log(values,"values")
    cookies().set('cartId', "cartIdTest")
  // ...
}