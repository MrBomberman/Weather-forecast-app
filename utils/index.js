function fetchData() {


    return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=2061b3a9d510a4c514ba1b661d445337`)
        .then(res => res.json())



}

export default fetchData;