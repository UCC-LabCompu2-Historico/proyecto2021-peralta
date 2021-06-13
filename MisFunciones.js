/**
 * Calcula el voltaje de salida del transformador eléctrico según los datos ingresados por el usuario (V1, N1 y N2)
 * @method calcularVoltaje
 */
function calcularVoltaje(){
    var V1, N1, N2;

    V1 = document.getElementById("v1").value;
    N1 = document.getElementById("n1").value;
    N2 = document.getElementById("n2").value;

    if((V1 == "") || (N1 == "") || (N2 == "")){
        alert("Faltan datos");
    }else if((N1 % 1 != 0) || (N2 % 1 != 0)){
        alert("Ingrese un número entero para N1 o N2");
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }else if((V1 <= 0) || (N1 <= 0) || (N2 <= 0)){
        alert("Los valores deben ser positivos");
        document.getElementById("v1").value = "";
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }else{
        document.getElementById("v2").innerHTML = Math.round(((V1*N2)/N1)*100)/100 + " voltios (V)";
    }
}

/**
 * Calcula la intensidad de la bobina secundaria del transformador eléctrico según los datos ingresados por el usuario (I1, N1 y N2)
 * @method calcularIntensidad
 */
function calcularIntensidad(){
    var I1, N1, N2;
    I1 = document.getElementById("i1").value;
    N1 = document.getElementById("n1").value;
    N2 = document.getElementById("n2").value;

    if((I1 == "") || (N1 == "") || (N2 == "")){
        alert("Faltan datos");
    }else if((N1 % 1 != 0) || (N2 % 1 != 0)){
        alert("Ingrese un número entero para N1 o N2");
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }else if((I1 <= 0) || (N1 <= 0) || (N2 <= 0)){
        alert("Los valores deben ser positivos");
        document.getElementById("i1").value = "";
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }else{
        document.getElementById("i2").innerHTML = Math.round(((I1*N1)/N2)*100)/100 + " amperios (A)";
    }
}
