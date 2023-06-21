const key = '26b392a0b16fb0e28775cb1badceadaa';

// const baseURl = 'http://api.openweathermap.org/geo/1.0/direct?q=Sylhet,+880&appid=26b392a0b16fb0e28775cb1badceadaa';

// fetch(baseURl)
//     .then((data) => { console.log('response', data.json()) })
//     .catch((error) => {
//         console.log(error);
//     });

const requestCity = async (city) => {
    const baseUrl = 'http://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    //make fetch call (promise call)
    const response = await fetch(baseUrl + query)

    const data = await response.json();
   return data;
}