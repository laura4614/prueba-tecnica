import React from 'react'
import 'weather-icons/css/weather-icons.css';

const Weather = (props) => {
    const currentTime = new Date(props.time * 1000)
    const hour = `${currentTime.getHours()}:00`

    return (


        <div >

            <div className="cards container">
                <h1 className="">{props.cityName}</h1>
                <h6>{hour}</h6>


                <h5 className="py-4">
                    <i className={`wi wi-day-${props.icon} display-1`}></i>
                </h5>
                <h1 className="py-1"> {Math.round((props.temperature-32)*(5/9))} &deg; </h1>
                <div className="row">
                    <div className="col-sm">
                        <h1>{Math.round((props.temperatureMax-32)*(5/9))}</h1>
                        <h6>Max</h6>
                    </div>
                    <div className="col-sm">
                        <h1>{Math.round((props.temperatureMin-32)*(5/9))}</h1>
                        <h6>Min</h6>
                    </div>
                </div>
                <h4 className="py-3"> {props.summary}</h4>
            </div>


        </div>
    );
};



export default Weather;
