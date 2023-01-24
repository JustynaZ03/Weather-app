import {
  Accordion,
  AccordionItemButton,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { DataofForecast } from "../../types/types";
import "./forecast.scss";
const WEEK = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const Forecast = (data: DataofForecast) => {
  const dayInWeek = new Date().getDate();
  const forecastDay = WEEK.slice(dayInWeek, WEEK.length).concat(
    WEEK.slice(0, dayInWeek)
  );
  return (
    <div className="forecast">
      <div className="forecast__container">
        <div className="forecast__container-title">
          <span className="forecast__container-title-item">Daily Weather</span>
        </div>
        <Accordion allowZeroExpanded>
          {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="forecast__container-items">
                    <span className="forecast__container-item">
                      {forecastDay[index]}
                    </span>
                    <img
                      alt="weather"
                      className="forecast__container-items-icon"
                      src={`icons/${data.list[index].weather[0].icon}.png`}
                    />
                    <span className="forecast__container-item">
                      {data.list[index].weather[0].description}
                    </span>
                    <span className="forecast__container-item">
                      {Math.round(data.list[index].main.temp_min)}°C /
                      {Math.round(data.list[index].main.temp_max)}°C
                    </span>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel></AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
