const axios = require("axios");

module.exports.getWeather = async (event) => {
  const city = event.queryStringParameters?.city;

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "City is required." }),
    };
  }

  const apiKey = "c802af44bb1ca4611d2a9fafecd7111b";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await axios.get(url);
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "An error occurred while fetching weather data.",
        error: error.message,
      }),
    };
  }
};
