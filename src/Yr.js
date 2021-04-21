import React from "react";
import axios from "axios";

class Yr extends React.Component {
        
    constructor(props) {
        super(props);
        this.state = {weather: "", lat:"2", long:"2"} ;  
    }

    componentDidMount() {        
        navigator.geolocation.getCurrentPosition(this.calculateAndGet.bind(this));
    }

    calculateAndGet(pos) {
        this.setState({lat: pos.coords.latitude, long: pos.coords.longitude}, this.getYrData);
    }

    async getYrData(pos) {        
        const response = await axios.get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${this.state.lat}&lon=${this.state.long}`);
        var currentWeatherSymbol = response.data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
        var currentWeather = "sunny";
        if (currentWeatherSymbol.includes("thunder")) {
            currentWeather = "thunder"
        } else if (currentWeatherSymbol.includes("snow")) {
            currentWeather = "snow"
        } else if (currentWeatherSymbol.includes("slate")) {
            currentWeather = "slate"
        } else if (currentWeatherSymbol.includes("rain")) {
            currentWeather = "rain"
        } else if (currentWeatherSymbol.includes("fog")) {
            currentWeather = "fog"
        } else if (currentWeatherSymbol.includes("cloudy")) {
            currentWeather = "cloudy"
        } 
        this.setState({weather:currentWeather});
        this.props.updatedWeather(currentWeather);
    }

    render() {
        return (
            <div>
                <div>Looks like there's gonna be {this.state.weather}...</div>
            </div>
        )
    }
}

export default Yr;