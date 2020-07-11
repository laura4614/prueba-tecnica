import React, { Component } from 'react';
import Weather from './Weather.jsx';
import Search from './Search.jsx'
import Map from './Map.jsx'


class WeatherDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            forecastcurrentInfo: [],
            cityName:'',
            forecastdailyInfo: [],
            
           
            
           
        }
    }

    onChangeCity = (value) => this.setState({ city: value })

    onClick = async () => {

        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${this.state.city}.json?access_token=pk.eyJ1IjoiYW1qaW1lbmV6diIsImEiOiJjazljOXBpZTMwMjFvM2hwM2l5ZmltZHk4In0.gWJxHBxwcnX-xEou6Oew7A&limit=1`
        const getLatLng = await fetch(url)
        const getLatLngJson = await getLatLng.json();
        const { geometry: { coordinates}, text:cityName } = getLatLngJson.features[0];

        const avoidCorsService = 'https://cors-anywhere.herokuapp.com/'
        const clima = await fetch(`${avoidCorsService}https://api.darksky.net/forecast/cb5aea18887e92e9b7bdf2a8321e7009/${coordinates[1]},${coordinates[0]}`,
        
        );
        const climatoJson = await clima.json();
        const weatherhourly = climatoJson.hourly.data
        const weatherdaily=climatoJson.daily.data
        this.setState({ forecastcurrentInfo: weatherhourly,cityName, forecastdailyInfo: weatherdaily})
        


    }

    cardweather = () => {
        const nextFourForecast = this.state.forecastcurrentInfo.slice(0, 4)
        const cardWeather = nextFourForecast.map((forecast,index) => {
            return (
                <div className="col-sm">
                    <Weather 
                    cityName= {this.state.cityName}
                    icon={forecast.icon}
                    time={forecast.time}
                    temperature={forecast.temperature}
                    temperatureMax={this.state.forecastdailyInfo[0]. temperatureMax}
                    temperatureMin={this.state.forecastdailyInfo[0]. temperatureMin}
                    summary={forecast.summary}
                    />
                </div>
    
            )
        })
        return cardWeather;


    }

    

    


    render() {
        return (
            <div className="container">
                <Search
                    changeSearch={this.onChangeCity}
                    cityValue={this.state.city}
                    weather={this.onClick}
                />
              
                <div className="row">
                    {this.cardweather()}

                </div>

                <Map 
                coordinates={this.state}
                lat={this.lat}
                lng={this.lng}

                 />
            </div>
        );
    }
}

export default WeatherDisplay;
