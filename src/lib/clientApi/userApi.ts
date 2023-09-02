import { clientRequest } from "../clientRequest";

export async function handleLogin(username:string, password:string){
    return await clientRequest.post("/auth/login", {username,password})
}