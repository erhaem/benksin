async function run() {
  try {
    // per Oct '26, no more scraping the html page :p
    // use their web API instead.
    // we don't even need bun anymore tbh, but ok.
    const api = await fetch("https://api.web.mypertamina.id/price", {
      "credentials": "omit",
      "headers": {
        "User-Agent": "Mozilla/5.0 (X11; Linux x86_64; rv:157.0) Gecko/20100101 Firefox/157.0",
        "Accept": "application/json, text/plain, */*",
        "Accept-Language": "en-US,en;q=0.9",
        "Sec-GPC": "1",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-site"
      },
      "referrer": "https://mypertamina.id/",
      "method": "GET",
      "mode": "cors"
    });
    if (!api.ok) throw new Error(`Not OK! Status: ${res.status}`);

    const { data } = await api.json();
    await Bun.write("data/price.json", JSON.stringify(data, null, 2));
    console.log("fetch success!");
  } catch (err) {
    console.error(err.message);
  }
}