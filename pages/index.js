import WeatherForecast from '../components/WeatherForecast'

export default function Home(props) {
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