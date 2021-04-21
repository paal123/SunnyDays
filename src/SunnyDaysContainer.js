import React from "react"
import Yr  from './Yr';
import Spotify from './Spotify';
import './App.css';

class SunnyDaysContainer extends React.Component {
    state = {
        token: "",
        weather: "thunder"
    }
    
    componentDidMount() {
        var searchParams = new URLSearchParams(window.location.hash.substr(1));
        var access_token = searchParams.get('access_token');
        if (access_token) {
            this.setState({token: access_token});
        }
        document.title = "Sunny Days";
    }

    weatherCallback = (weather) => {
        this.setState({weather:weather});
    }

    render() {
      return (
        <div className="App">
            <header>
                {!this.state.token && 
                    <div>
                        <p>Welcome to Sunny Days</p>
                        {
                            // Documentation:
                            // https://developer.spotify.com/documentation/general/guides/authorization-guide/ 
                        }
                        <a href="https://accounts.spotify.com/authorize?client_id=e6af23f34ccf46f4a92eb6ff160681f2&redirect_uri=http://localhost:3000&response_type=token&show_dialog=true" className="btn">Login to Spotify</a>
                    </div>
                }
                { this.state.token && 
                    <div>
                        <Yr updatedWeather={(weather) => this.weatherCallback(weather)}/>
                        <Spotify weather={this.state.weather} token={this.state.token}/>
                    </div>
                }                
            </header>
        </div>
      )
  }
}

export default SunnyDaysContainer