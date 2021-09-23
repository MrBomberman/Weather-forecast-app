import { useState } from "react";

export default function CurrentTime(){

    const [fullDate, setFullDate] = useState('')


    function dateNow() {
        let currentDate = new Date();

        let localDate = currentDate.toDateString()
        let localTime = currentDate.toLocaleTimeString()

        setFullDate(localTime + ' ' + localDate)
    }


    setInterval(dateNow, 1000)
    let dateBlock = fullDate === '' ? 'Loading...' :  <p>{fullDate}</p>;

    return (
        <div>
            {dateBlock}
        </div>
    )
}