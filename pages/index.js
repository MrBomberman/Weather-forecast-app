import { useEffect, useState } from 'react';
import MainPageLoader from '../components/loaders/MainPageLoader';
import WeatherForecast from '../components/WeatherForecast';
import fetchData from '../utils';

const API_KEY = 'AIzaSyDF8JfKdE8X1K3UvxcFiOa88cxiaOcFFVc'

export default function Home() {

  const [currentLocation, setCity] = useState('')
  const [data , setData] = useState();
  const [loading, setLoading] = useState(true);
  const [mainError, setMainError] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {

        let crd = position.coords;
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
          fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&key=${API_KEY}&language=en`)
          .then(resPosition => resPosition.json())
          .then(resPosition => {
              console.log(resPosition)
              let currentAddress = resPosition.plus_code.compound_code;
              let firstSpace = currentAddress.indexOf(' ');
              let firstComma = currentAddress.indexOf(',')
              let currentCity = currentAddress.slice(firstSpace+1,firstComma);
              setCity(currentCity)
  
              return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Moscvnsvnsdjvknow&appid=2061b3a9d510a4c514ba1b661d445337`)
          })
          .then(res => res.json())
          .then(result => {
            console.log('Result:', result)
            if(result.cod == '200'){
              setData(result)
              setLoading(false)
            } else {
              setMainError(`Can't find weather data for your current position`)
              setLoading(false)
            }
          })



        
    })
  },[])



  if (loading == true) {
    return (<MainPageLoader/>)
  } else {
    if (mainError != ''){
      return (
        <>
          <WeatherForecast mainError={mainError} currentLocation={currentLocation}
          setCity={setCity} setData={setData} setMainError={setMainError}/>
        </> 
      )
    } else {
      return (
            <>
              <WeatherForecast data={data} currentLocation={currentLocation} setCity={setCity} 
              setData={setData} />
            </>
      )
    }
  }
}

