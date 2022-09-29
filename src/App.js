import React, { useState } from "react";
import Card from "./Card";
import { Error } from "./Error";
import { Loading } from "./Loading";

function App() {
  const [place, setPlace] = useState("");
  const [weather, setWeather] = useState([]);
  const [fetched, setFetched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
  const port = "3d59a6cbbbad8955c5abd31417471e0d";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (place) {
      setIsError(false);
      setIsEmpty(false);
      setFetched(false);
      setIsLoading(true);
      fetch(apiUrl + place + "&appid=" + port)
        .then((data) => {
          if (data.status >= 200 && data.status <= 299) {
            return data.json();
          } else {
            setIsLoading(false);
            setIsError(true);
            throw new Error(console.log(data.statusText + data.status));
          }
        })
        .then((resp) => {
          setWeather(resp);
          setFetched(true);
          setIsLoading(false);
          setIsError(false);
        })
        .catch((err) => {
          console.log(err);
          setFetched(false);
          setIsLoading(false);
          setIsError(true);
        });

      setPlace("");
    } else {
      setIsLoading(false);
      setFetched(false);
      setIsError(true);
      setIsEmpty(true);
    }
  };

  return (
    <>
      <div className="container">
        <h1>Weather App</h1>
        <form className="location" onSubmit={handleSubmit}>
          <label htmlFor="city">Enter a Location for weather information</label>
          <input
            type="text"
            name="city"
            placeholder="Enter"
            id="city"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
          />
        </form>

        {fetched && <Card {...weather} />}
        {isLoading && <Loading isLoading={isLoading} />}
        {isError && <Error isEmpty={isEmpty} isError={isError} />}
      </div>
    </>
  );
}

export default App;
