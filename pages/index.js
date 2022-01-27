import { useEffect } from 'react';
import WeatherForecast from '../components/WeatherForecast';


export default function Home(props) {
  function success(pos) {
    var crd = pos.coords;
    console.log(pos)

  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  

  useEffect(() => {
    console.log(navigator.geolocation.getCurrentPosition(success))
  },[])
  
  return (
    <>
      <WeatherForecast props={props}/>
    </>
  )
}


export async function getServerSideProps() {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=2061b3a9d510a4c514ba1b661d445337`)
  const result = await response.json()
  return {
    props: {data: result}
  };
}