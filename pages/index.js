import { useEffect, useState } from 'react';
import WeatherForecast from '../components/WeatherForecast';
import fetchData from '../utils';

const API_KEY = 'AIzaSyDF8JfKdE8X1K3UvxcFiOa88cxiaOcFFVc'

export default function Home() {

  const [currentLocation, setCity] = useState('')
  const [data , setData] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {

        var crd = position.coords;
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);

        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&sensor=false&key=${API_KEY}&language=en`)
          .then(resPosition => resPosition.json())
          .then(resPosition => {
            let currentCity = resPosition.results[0].address_components[2].long_name;
            setCity(currentCity);
            return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=2061b3a9d510a4c514ba1b661d445337`)
          })
          .then(res => res.json())
          .then(result => setData(result))
        
    })
  },[])

  // data === undefined ?   
  return data === undefined ? (<div className="loadingio-spinner-dual-ball-yr9qitepzf"><div className="ldio-wc4ckuxa3y">
  <div></div><div></div><div></div>
  </div></div>) : (
    <>
      <WeatherForecast data={data} currentLocation={currentLocation}/>
    </>
  )
}

