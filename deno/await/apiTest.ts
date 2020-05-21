// deno run --allow-net apiTest.ts

// api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
const fetchWeatherData = async(city: string) => {
  const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  const appId = "";
  const url = `${baseUrl}${city}&appid=${appId}`;
  const res = await fetch(url);
  const body = await res.json();
  console.log("======data======");
  console.log(body);
  console.log("======data======");
}

fetchWeatherData('london');


const fetchIPAddressInfo = async(ipAddress: string) => {
  const url = `http://ip-api.com/json/${ipAddress}`;
  const res = await fetch(url);
  const body = await res.json();
  console.log(body);
}

fetchIPAddressInfo('1.1.1.1');
