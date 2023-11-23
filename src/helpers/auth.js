export const fetchAccesToken = () =>{
    return fetch("https://www.universal-tutorial.com/api/getaccesstoken",{
        method:'GET',
    headers:{
        Accept:'application/json',
        'api-token': 'BKel9yZt0WtHzQdAmgE9TBQivw94XvGSL92aY1Bb7kJYfoit1RfJ2dPJ5kacIQcgFYw',
        'user-email':'yeni.astaizav@gmail.com'
    }
})
.then(res => res.json())
.then(data => {
    if(data.auth_token){
        return data.auth_token
    }else{
        throw new Error('No se pudo obtener el token temporal')
    }
})
}