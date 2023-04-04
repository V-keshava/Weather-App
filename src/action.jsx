// import axios from "axios";

export const fetchWeatherRequest = () => {
  return {
    type: "FETCH_WEATHER_REQUEST",
  };
};

export const fetchWeatherSuccess = (weatherData) => {
  return {
    type: "FETCH_WEATHER_SUCCESS",
    payload: weatherData,
  };
};
export const fetchWeatherFailure = (error) => {
  return {
    type: "FETCH_WEATHER_FAILURE",
    payload: error,
  };
};
export const fetchWeather = (city) => {
  return (dispatch) => {
    dispatch(fetchWeatherRequest());

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=94d167eb08cea48998bedbf793f4a86e`
    )
      .then((val) => val.json())
      .then((Response) => {
        console.log(Response);
        dispatch(fetchWeatherSuccess(Response));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWeatherFailure(errorMsg));
      });
  };
};
