const apiKey = '301ab2b4b6a87df74d978673cbbc41dc';

async function getWeather() {
  const location = document.getElementById('locationInput').value;
  if (!location) return alert('Please enter a location');

  const response = await fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${location}`);
  const data = await response.json();

  if (!data.location) {
    document.getElementById('weather').innerHTML = `<p>Location not found or invalid API key.</p>`;
    return;
  }

  const weatherInfo = `
    <h2>${data.location.name}, ${data.location.country}</h2>
    <p><strong>Temperature:</strong> ${data.current.temperature}°C</p>
    <p><strong>Weather:</strong> ${data.current.weather_descriptions[0]}</p>
    <p><strong>Humidity:</strong> ${data.current.humidity}%</p>
    <p><strong>Wind Speed:</strong> ${data.current.wind_speed} km/h</p>
    <p><strong>Feels Like:</strong> ${data.current.feelslike}°C</p>
  `;

  document.getElementById('weather').innerHTML = weatherInfo;
}
