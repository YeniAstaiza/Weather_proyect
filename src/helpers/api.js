export const fetchCountries =(authToken,country) => {
    return fetch(`https://www.universal-tutorial.com/api/countries${country}`,{
        method:'GET',
        headers:{
            Autorization: 'Bearer' + authToken,
            Accept: 'application/json'
        }
    })
    .then(res => res.json())
    .then(countriesData => {
        return countriesData
    })
}

export const fetchStates = (authToken,state) => {
    return fetch(`https://www.universal-tutorial.com/api/states/United States${state}`,{
        method:'GET',
        headers:{
            Autorization: 'Bearer' + authToken,
            Accept: 'application/json'
        }
    })
    .then(res => res.json())
    .then(stateData => {
        return stateData
    })
}

export const fetchCities = (authToken,city) => {
    return fetch(`https://www.universal-tutorial.com/api/cities${city}`,{
        method:'GET',
        headers:{
            Autorization: 'Bearer' + authToken,
            Accept: 'application/json'
        }
    })
    .then(res => res.json())
    .then(citiesData => {
        return citiesData
    })
}