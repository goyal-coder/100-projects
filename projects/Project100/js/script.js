const baseURL = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const key = "ff19c9d8dacd0e5f339bc5f242cd49fe";

async function checkWeather(city) {
  if (!city) return; // Prevent empty search
  const response = await fetch(`${baseURL}&q=${city}&appid=${key}`);

  if (!response.ok) {
    alert("City not found!"); // Handle invalid city names
    return;
  }

  const weatherData = await response.json();
  console.log(weatherData);

  document.querySelector(".city").innerHTML = weatherData.name;
  document.querySelector(".temp").innerHTML =
    Math.round(weatherData.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML =
    weatherData.main.humidity + "%";
  document.querySelector(".wind").innerHTML = weatherData.wind.speed + " km/h";

  // Set weather icon based on the weather condition
  const weatherCondition = weatherData.weather[0].main.toLowerCase();

  if (weatherCondition === "clear") {
    weatherIcon.src = "assets/sunny.png";
  } else if (weatherCondition === "clouds") {
    weatherIcon.src = "assets/cloudy.png";
  } else if (weatherCondition === "rain") {
    weatherIcon.src = "assets/heavy-rain.png";
  } else if (weatherCondition === "drizzle") {
    weatherIcon.src = "assets/drizzle.png";
  } else if (weatherCondition === "thunderstorm") {
    weatherIcon.src = "assets/thunderstrom.png";
  } else if (weatherCondition === "snow") {
    weatherIcon.src = "assets/snow.png";
  } else if (weatherCondition === "mist") {
    weatherIcon.src = "assets/mist.png";
  } else if (weatherCondition === "fog") {
    weatherIcon.src = "assets/fog.png";
  } else if (weatherCondition === "haze") {
    weatherIcon.src = "assets/haze.png";
  } else if (weatherCondition === "dust") {
    weatherIcon.src = "assets/broom.png";
  } else if (weatherCondition === "wind") {
    weatherIcon.src = "assets/wind.png";
  } else {
    weatherIcon.src = "assets/sunny.png"; // Default image if condition doesn't match
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});

document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");

  // Default city for testing
  const city = searchBox.value.trim() || "New York"; // Default city if no input
  checkWeather(city);
});

// Initialize EmailJS
(function () {
  emailjs.init("86DpoOTsPkjJZkQy2");
})();

// Get the form and add event listener
// document.getElementById('contact-form').addEventListener('submit', function (event) {
//     event.preventDefault();

//     const formData = new FormData(this);

// });

const handleSubmit = () => {
  // const formData = {
  //     name : document.getElementById('name').value,
  //     email : document.getElementById('email').value,
  //     message : document.getElementById('message').value,
  // }
  const frm = document.getElementById("contact-form");
  console.log(frm);
  emailjs
    .sendForm("service_1oivpvl", "template_wl51hhd", frm)
    .then(function (response) {
      console.log("formData");
      console.log("Success:", response);
      alert("Your message has been sent!");
      document.getElementById("contact-form").reset(); // Reset form after sending
    })
    .catch(function (error) {
      console.log("formData");
      console.error("Error:", error);
      console.log("formData");
      alert("Something went wrong, please try again later.");
      // Log detailed error response
      console.log(error);
    });
  console.log("Hii");
};
