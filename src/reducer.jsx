const initialState = {
  weatherData: {},
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_WEATHER_REQUEST":
      return {
        ...state,
      };
    case "FETCH_WEATHER_SUCCESS":
      let report = {
        place: action.payload.name,
        temp: Math.round(action.payload.main.temp-273),
        humidity: Math.round(action.payload.main.humidity),
        description: action.payload.weather[0].description,
        maxTemp: Math.round(action.payload.main.temp_max-273),
        minTemp: Math.round(action.payload.main.temp_min-273),
        feelsLike:Math.round(action.payload.main.feels_like-273),
      };
      return {
        ...state,
        weatherData: report,
      };

    case "FETCH_WEATHER_FAILURE":
      return {
        ...state,
      };
    default:
      return state;
  }
};
