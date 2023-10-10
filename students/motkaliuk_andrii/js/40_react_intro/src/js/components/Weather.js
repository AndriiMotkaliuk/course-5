import React from "react";

export default function Weather() {

    return (
        <div className="container ">
            <div className="weather-forecast__title_wrapper ">
                <h3 className="weather-forecast__title">CSS Weather Forecast</h3>
                <img
                    src="images/icon_1.svg"
                    alt="weather forecast icon"
                    className="weather-forecast__title-img"
                />
            </div>
            <div className="weather-forecast__wrapper clear-fix ">
                <div className="weather-forecast lisabon">
                    <h3 className="weather-forecast__city ">Lisabon</h3>
                    <div className="weather weather__half clear-fix">
                        <p className="weather-forecast__temp">21°C</p>
                        <img
                            src="images/icon.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast paris">
                    <h3 className="weather-forecast__city ">Paris</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">11°C</p>
                        <img
                            src="images/icon_2.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast belgrade">
                    <h3 className="weather-forecast__city ">Belgrade</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">15°C</p>
                        <img
                            src="images/icon_3.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast venice">
                    <h3 className="weather-forecast__city ">Venice</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">21°C</p>
                        <img
                            src="images/icon_4.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast tel-avive">
                    <h3 className="weather-forecast__city ">Tel-Avive</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">32°C</p>
                        <img
                            src="images/icon_5.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast cair">
                    <h3 className="weather-forecast__city ">Cair</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">21°C</p>
                        <img
                            src="images/icon.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast new-york">
                    <h3 className="weather-forecast__city ">New-York</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">17°C</p>
                        <img
                            src="images/icon_6.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast new-delhi">
                    <h3 className="weather-forecast__city ">New-Delhi</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">17°C</p>
                        <img
                            src="images/icon_10.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast san-francisco">
                    <h3 className="weather-forecast__city ">San-Francisco</h3>
                    <div className="weather weather__half clear-fix">
                        <p className="weather-forecast__temp">15°C</p>
                        <img
                            src="images/icon_9.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast tokyo">
                    <h3 className="weather-forecast__city ">Tokyo</h3>
                    <div className="weather clear-fix">
                        <p className="weather-forecast__temp">8°C</p>
                        <img
                            src="images/icon_7.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
                <div className="weather-forecast sydney">
                    <h3 className="weather-forecast__city ">Sydney</h3>
                    <div className="weather weather__full  clear-fix">
                        <p className="weather-forecast__temp">25°C</p>
                        <img
                            src="images/icon_8.svg"
                            alt="weather forecast icon"
                            className="weather-forecast__img"
                        />
                    </div>
                </div>
            </div>
            <p className="last-massege">
                Have a nice day and don't forget umbrella if you are in New Delhi now!
            </p>
        </div>
    )
};
