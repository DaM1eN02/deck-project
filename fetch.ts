export async function http(
  url: string,
  method?: "GET" | "POST" | "PATCH",
  data: any = {},
) {
  let res = new Response();
  if (method == "GET") {
    res = await fetch(url, {
      method: method,
      mode: "cors",
      cache: "no-cache",
    });
    return res.json();
  } else if (method == "POST") {
    res = await fetch(url, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  } else if (method == "PATCH") {
    res = await fetch(url, {
      method: method,
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return res.json();
  }
}
