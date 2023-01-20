console.log("Inicio práctica Calendario");
const resultado = document.querySelector('#resultado');

//Leemos los valores de entrada dia / mes / año
const valores = () => {
    let dia = parseInt(document.getElementById("dia").value);
    let mes = parseInt(document.getElementById("mes").value);
    let anio = parseInt(document.getElementById("anio").value);
    let numeros = [dia, mes, anio];
    return numeros;
}

//Comprobar valores numéricos
function esNumerico(value) {
    return !isNaN(parseFloat(value)) && isFinite(value);
}

//Comprobar año bisiesto
const esBisiesto = (c) => {
    return (c % 400 === 0) ? true :
        (c % 100 === 0) ? false :
            (c % 4 === 0) ? true : false
};

//Validar fecha instroducida y callback de botón "Calcular"
calcular = () => {
    let [a, b, c] = valores();
    console.log(a + " " + b + " " + c);
    let bandera = false;
    let fecha;
    if (esNumerico(a) && esNumerico(b) && esNumerico(c)) {
        if (a <= 31 && b == 1 || b == 3 || b == 5 || b == 7 || b == 8 || b == 10 || b == 12) { //Meses con 31 días
            bandera = true;
        } else if (a <= 30 && b == 4 || b == 6 || b == 9 || b == 11) { //Meses con 30 días
            bandera = true;
        } else if (a <= 29 && b == 2) { //Febrero
            esBisiesto(c) ? bandera = true :
                a <= 28 ? bandera = true : bandera = false;
        }
        else bandera = false;
    }
    else {
        resultado.innerHTML = "-"
    }
    fecha = new Date(Number(c), Number(b - 1), Number(a))
    bandera == true ? dias(fecha) : resultado.innerHTML = "Fecha inválida"
}

//Determinar el día de la semana
function dias(fecha) {
    let diaSemana = fecha.getUTCDay();
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
            resultado.innerHTML = "Sábado, fin de semana"; break;
    }
}


