import { cookies } from "next/headers";
import { BASE_URL } from "@/lib//constants";

export default async function authFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const cookieStore = cookies();
  var token = cookieStore.get("token")?.value;
  let n_options = { ...options };
  if (token) {
    n_options.headers = {
      Authorization: `Bearer ${token}`,
    };
  }
  if (url.startsWith("/")) {
    //relative path
    url = BASE_URL + url;
  }
  let response = await fetch(url, n_options);

  let data = await response.json();
  if (!response.ok) {
    // get error message from body or default to response status
    const error = (data && data.message) || response.status;
    console.log(error, "error message");
    return Promise.reject(error);
  }

  return data;
}
