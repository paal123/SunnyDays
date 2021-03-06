# Sunny Days
Example code of API usage for UiS Helse Hackathon 2021

The example demonstrates usage of APIs to retrieve weather forecast (from https://api.met.no) for your current position, and then suggest a random playlist from Spotify through their apis (https://developer.spotify.com)

The example demonstrates (_very simplified_) both anonymous calls as well as an Implicit Grant Flow for calls against https://api.spotify.com.

# The Sunny Days GUI
![image](https://user-images.githubusercontent.com/5801561/115568295-71b26480-a2bc-11eb-8184-45b6c5d0e988.png)

# Important links
Metrologisk Institutt api endpoint used in code example<br/>
https://api.met.no/weatherapi/locationforecast/2.0/documentation#!/data/get_compact

Authorization guide for Spotify<br/>
https://developer.spotify.com/documentation/general/guides/authorization-guide/

Documentation for Spotify search endpoint<br/>
https://developer.spotify.com/documentation/web-api/reference/#category-search

Spotify developer console. For testing and easy retrieval of access token <br/>
https://developer.spotify.com/console/get-search-item/

# How to use
```
$ yarn install
$ yarn start
```
