const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=b5912c970d2efe99c9c78de900ab388a&query=${longitude},${latitude}`;

  request(
    {
      url,
      json: true,
    },
    (error, { body }) => {
      if (error) {
        callback('Unable to connect to forecast services.', undefined);
      } else if (body.error) {
        callback('Unable to find location.', undefined);
      } else {
        const data = body.current;
        const text = `${data.weather_descriptions[0]}. It is currently ${data.temperature} out. It feels like ${data.feelslike} degrees.`;
        callback(undefined, text);
      }
    }
  );
};

module.exports = forecast;
