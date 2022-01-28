async function fetchData(city) {


    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=2061b3a9d510a4c514ba1b661d445337`)
    const res = await response.json()
    console.log(res)
    return await res


}

export default fetchData;