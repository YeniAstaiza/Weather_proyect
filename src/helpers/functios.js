const fecha = (dt) => {
    return   new Date(dt * 1000).toLocaleDateString('es-co', { weekday:"short", month:"short", day:"numeric"}) 
}

const hora = (dt) => {
    return  new Date(dt * 1000).getHours('es-co', {timezone: 'UTC'})
}
const minutos = (dt) => {
    return  new Date(dt * 1000).getMinutes('es-co', {timezone: 'UTC'})
}
const segundos = (dt) => {
    return  new Date(dt * 1000).getSeconds('es-co', {timezone: 'UTC'})
}
const conversion = (celsius, temp) => {
    if(celsius){
        return `${Math.round(temp)} °C`;
    } else {
        return `${Math.round((temp * 1.8) +32)} °F`
    }
} 
const limpiar = () => {
    formulario.reset();
    return false;
}
export {
    fecha,
    hora,
    minutos,
    segundos, 
    conversion, 
    limpiar,

}
