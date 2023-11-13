export const fetchCountries =(authToken,state) => {
    return fetch(`https://www.universal-tutorial.com/api/countries${state}`,{
        method:'GET',
        headers:{
            Autorization: 'Bearer' + authToken,
            Accept: 'application/json'
        }
    })
    .then(res => res.json())
    .then(contriesData => {
        return contriesData
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
    .then(citiesData => {
        return citiesData
    })
}

export const fetchCities = (authToken,state) => {
    return fetch(`https://www.universal-tutorial.com/api/cities${state}`,{
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