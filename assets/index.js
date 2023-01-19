console.log("Inicio práctica Calendario");
const resultado = document.querySelector('#resultado');

//Leemos los valores de entrada dia / mes / año
valores = () => {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let anio = parseInt(document.getElementById("anio").value);
    let numeros = [dia, mes, anio];
    return numeros;
}

//Función onclick
function calcular() {
    validar();
}

//Comprobar valores numéricos
function esNumerico(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

//Validar fecha instroducida
validar = () => {
    let [a, b, c] = valores();
    let bandera = false;
    let fecha;
    if (esNumerico(a) && esNumerico(b) && esNumerico(c)) {
        if (a <= 31) { //Meses con 31 días
            if (b == 1 || b == 3 || b == 5 || b == 7 || b == 8 || b == 10 || b == 12)
                bandera = true;
        } else if (a <= 30) { //Meses con 30 días
            if (b == 4 || b == 6 || b == 9 || b == 11)
                bandera = true;
        } else if (a <= 28) { //Febrero
            bandera = true;
        }
        else bandera = false;
    }
    fecha = new Date(Number(c), Number(b - 1), Number(a))
    bandera == true ? dias(fecha) : resultado.innerHTML = "Fecha invalida"
}

//Determinar el día de la semana
function dias(fecha) {
    let diaSemana = fecha.getUTCDay();
    console.log(diaSemana)
    switch (diaSemana) {
        case 0:
            resultado.innerHTML = "Domingo, fin de semana"; break;
        case 1:
            resultado.innerHTML = "Lunes, día laboral"; break;
        case 2:
            resultado.innerHTML = "Martes, día laboral"; break;
        case 3:
            resultado.innerHTML = "Miércoles, día laboral"; break;
        case 4:
            resultado.innerHTML = "Jueves, día laboral"; break;
        case 5:
            resultado.innerHTML = "Viernes, día laboral"; break;
        default:
            resultado.innerHTML = "Sábado, día laboral"; break;
    }
}