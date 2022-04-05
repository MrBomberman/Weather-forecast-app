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
  // const [geoLength, setGeoLength] = useState(0)

  useEffect(() => {
    setMainError(`Can't find weather data for your current position`)
    setLoading(false)
    // console.log(Object.keys(navigator.geolocation).length)
    // navigator.geolocation.getCurrentPosition(function (position) {
    //     // setGeoLength(Object.keys(position).length)
    //     let crd = position.coords;
    //     console.log(`Latitude : ${crd.latitude}`);
    //     console.log(`Longitude: ${crd.longitude}`);
    //       fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${crd.latitude},${crd.longitude}&key=${API_KEY}&language=en&locality`)
    //       .then(resPosition => resPosition.json())
    //       .then(resPosition => {
    //           let currentCity = '';
    //           for(let i =0; i < resPosition.results.length; i++){
    //             if(resPosition.results[i].types[0] == 'locality'){
    //               let currentAddress = resPosition.results[i].formatted_address;
    //               let firstComma = currentAddress.indexOf(',');
    //               currentCity = currentAddress.slice(0, firstComma);
    //               setCity(currentCity);
    //             }
    //           }
  
    //           return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${currentCity}&appid=2061b3a9d510a4c514ba1b661d445337`)
    //       })
    //       .then(res => res.json())
    //       .then(result => {
    //         console.log('Result:', result)
    //         if(result.cod == '200'){
    //           setData(result)
    //           setLoading(false)
    //         } else {
    //           setMainError(`Can't find weather data for your current position`)
    //           setLoading(false)
    //         }
    //       })



        
    // })
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
              setData={setData} setMainError={setMainError}/>
            </>
      )
    }
  }
}

