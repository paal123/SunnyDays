import React from "react";
import axios from "axios";

class Spotify extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            token: this.props.token,
            weather: this.props.weather,
            image: "",
            title: "loading...",
            url: ""
        } ;  
    }

    async getSpotifyTracks() {
        let config = {
            headers: {
              'Authorization': 'Bearer ' + this.state.token
            }
        }
        // Documentation:
        // https://developer.spotify.com/console/get-search-item/
        // https://developer.spotify.com/documentation/web-api/reference/#category-search
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${this.state.weather}&type=playlist&market=no&limit=20`, config);
        var randomList = Math.floor(Math.random()*20);
        var playlist = response.data.playlists.items[randomList];
        this.setState({title:playlist.name, image: playlist.images[0].url, url: playlist.external_urls.spotify});
    }

    componentDidMount() {
        this.getSpotifyTracks();
    }

    componentDidUpdate() {
        if (this.state.weather!==this.props.weather) {
            this.setState({weather:this.props.weather}, this.getSpotifyTracks);
        }
    }

    render() {
        return (
            <div className="spotify-box">
                <p>How about this playlist:</p>
                <a href={this.state.url}><img src={this.state.image} alt="Spotify..."/></a>
                <p>{this.state.title}</p>
            </div>
        )
    }
}

export default Spotify;