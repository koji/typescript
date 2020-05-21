// deno run --allow-net apiTest.ts

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const fetchData = async(city: string) => {
  const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  const appId = "";
  const url = `${baseUrl}${city}&appid=${appId}`;
  const res = await fetch(url);
  const body = await res.json();
  console.log("======data======");
  console.log(body);
  console.log("======data======");
}

fetchData('london');