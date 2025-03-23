async function getWeather(){
    const city = document.getElementById("cityInput").value;
    const apiKey = '47a70f63602d60e3191257a455e66424';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if(data.cod === 200) {
            document.getElementById("weatherResult").innerHTML = 
            `<h3>${data.name}, ${data.sys.country}</h3>
            <p>${data.weather[0].description}</p>
            <h2>${data.main.temp}°C</h2>` 
        } else {
            document.getElementById("weatherResult").innerHTML = `kota tidak di temukan`;
        }
        console.log(data);
    } catch (error) {
       document.getElementById("weatherResult").innerHTML = `terjadi kesalahan`;
    }
}