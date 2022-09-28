import React from "react";
import day from "./Time/day.svg";
import night from "./Time/night.svg";

const Card = (props) => {
  const state = {
    desc: props.weather[0].description,
    icon: props.weather[0].icon,
    name: props.name,
    time: props.dt,
    temp: props.main.temp,
  };

  var degC = state.temp - 273.15;
  var degCInt = Math.floor(degC);
  var degF = degC * 1.8 + 32;
  var degFInt = Math.floor(degF);
  const time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min < 10) {
    min = `0${min}`;
  }
  if (time.getHours() >= 5 || time.getHours() <= 18) {
    // lightTime = day;
    document.body.style.background = "linear-gradient(1deg, white, #6390bd)";
  }
  if (time.getHours() > 18 || time.getHours() <= 4) {
    // lightTime = night;
    document.body.style.background = "linear-gradient(1deg, black, #072849);";
  }

  return (
    <>
      <div className="card">
        <img src={day} alt="" />
        <div className="icon">
          <img
            src={"http://openweathermap.org/img/w/" + state.icon + ".png"}
            alt={state.name + " weather icon"}
          />
        </div>

        <div className="info">
          <h2>{state.name}</h2>
          <div>{state.desc}</div>
          <div>
            Time:
            <b>
              {hour}:{min}
            </b>
          </div>

          <div className="temp">
            <span>{degCInt} &deg;C</span> /<span>{degFInt} &deg;F</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
