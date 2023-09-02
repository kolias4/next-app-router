import { NextResponse } from 'next/server';

export async function handleLogin(username:string, password:string){
    const res =  await fetch("https://dummyjson.com/auth/login", {method:"POST", body:JSON.stringify({username,password})})
    return await res.json()
}
 
export async function POST(request: Request) {

    const {username, password} = await request.json()

    console.log(username, password)

    var res2 = await handleLogin(username, password)
 
  return NextResponse.json(res2);
}