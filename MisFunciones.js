/**
 * Calcula el voltaje de salida del transformador eléctrico según los datos ingresados por el usuario (V1, N1 y N2)
 * @method calcularVoltaje
 */
function calcularVoltaje(){
    var V1, N1, N2;

    V1 = document.getElementById("v1").value;
    N1 = document.getElementById("n1").value;
    N2 = document.getElementById("n2").value;

    if(V1 == "" || N1 == "" || N2 == ""){
        alert("Faltan datos");
    }else if(N1 % 1 != 0 || N2 % 1 != 0){
        alert("Ingrese un número entero para N1 o N2");
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }else if(V1 <= 0 || N1 <= 0 || N2 <= 0){
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

    if(I1 == "" || N1 == "" || N2 == ""){
        alert("Faltan datos");
    }else if(N1 % 1 != 0 || N2 % 1 != 0){
        alert("Ingrese un número entero para N1 o N2");
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }else if(I1 <= 0 || N1 <= 0 || N2 <= 0){
        alert("Los valores deben ser positivos");
        document.getElementById("i1").value = "";
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    }else{
        document.getElementById("i2").innerHTML = Math.round(((I1*N1)/N2)*100)/100 + " amperios (A)";
    }
}

/**
 * Dibuja la placa del transformador eléctrico y el número de vueltas de cada bobina
 * @method dibujarTransformador
 * @param {number} valorN1 - El número de vueltas de la bobina primaria ingresado por el usuario
 * @param {number} valorN2 - El número de vueltas de la bobina secundaria ingresado por el usuario
 */
function dibujarTransformador(valorN1, valorN2){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;

    //Placa del transformador
    ctx.beginPath();
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(120, 50, xMax-240, yMax-100);
    ctx.strokeRect(170, 90, xMax-340, yMax-180);
    ctx.stroke();
    ctx.closePath();

    //Número de vueltas de la bobina primaria
    var i = 0;
    var j = 5;
    ctx.beginPath();
    ctx.strokeStyle = "#FFB6C1";
    ctx.moveTo(50, 99);
    ctx.lineTo(170, 99);
    while(i < valorN1-2){ //No se cuentan primera y última vuelta
        ctx.moveTo(120, 99+j);
        ctx.lineTo(170, 99+j);
        j+=5;
        i++;
    }
    ctx.moveTo(50, 99+j);
    ctx.lineTo(170, 99+j);
    ctx.stroke();
    ctx.closePath();

    //Número de vueltas de la bobina secundaria
    i = 0;
    j = 5;
    ctx.beginPath();
    ctx.strokeStyle = "#FFB6C1";
    ctx.moveTo(xMax-50, 99);
    ctx.lineTo(xMax-170, 99);
    while(i < valorN2-2){ //No se cuentan primera y última vuelta
        ctx.moveTo(xMax-120, 99+j);
        ctx.lineTo(xMax-170, 99+j);
        j+=5;
        i++;
    }
    ctx.moveTo(xMax-50, 99+j);
    ctx.lineTo(xMax-170, 99+j);
    ctx.stroke();
    ctx.closePath();

    if(valorN1 == "" || valorN2 == ""){
        alert("Faltan datos");
        canvas.width = canvas.width;
    }else if(valorN1 < 3 || valorN1 > 27){
        alert("El simulador acepta valores para N1 entre 3 y 27");
        document.getElementById("n1").value = "";
        canvas.width = canvas.width;
    }else if(valorN2 < 3 || valorN2 > 27 ){
        alert("El simulador acepta valores para N2 entre 3 y 27");
        document.getElementById("n2").value = "";
        canvas.width = canvas.width;
    }else if(valorN1 % 1 != 0 || valorN2 % 1 != 0){
        alert("Ingrese un número entero para N1 o N2");
        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
        canvas.width = canvas.width;
    }
}

/**
 * Borra el canvas cada vez que se ingresan datos nuevos en los diferentes inputs
 * @method limpiarCanvas
 */
function limpiarCanvas(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

/**
 * Borra el resultado cada vez que se ingresan datos nuevos en los diferentes inputs
 * @method limpiarResultado
 */
function limpiarResultado(){
    document.getElementById("v2").innerHTML = "";
    document.getElementById("i2").innerHTML = "";
}

/**
 * Anima las flechas que representan el recorrido del flujo magnético en un transformador eléctrico
 * @method animarFlecha
 */
xDer=0;
xIzq=0;
dx=20;
function animarFlecha(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var xMax = canvas.width;
    var yMax = canvas.height;

    var N1, N2;
    N1 = document.getElementById("n1").value;
    N2 = document.getElementById("n2").value;

    ctx.fillStyle = "#F3F781";

    //Flecha que mira hacia la derecha
    ctx.clearRect(170, 60, 20+xDer, 20);
    ctx.beginPath();
    ctx.moveTo(170+xDer, 80);
    ctx.lineTo(170+xDer, 60);
    ctx.lineTo(190+xDer, 70);
    ctx.lineTo(170+xDer, 80);
    ctx.fill();
    ctx.closePath();

    xDer+=dx;

    if(xDer>xMax-340){
        ctx.clearRect(170, 60, 20+xDer, 20);
        xDer=0;
    }

    //Flecha que mira hacia la izquierda
    ctx.clearRect(xMax-190-xIzq, yMax-80, 20+xIzq, 20);
    ctx.beginPath();
    ctx.moveTo(xMax-170-xIzq, yMax-60);
    ctx.lineTo(xMax-170-xIzq, yMax-80);
    ctx.lineTo(xMax-190-xIzq, yMax-70);
    ctx.lineTo(xMax-170-xIzq, yMax-60);
    ctx.fill();
    ctx.closePath();

    xIzq+=dx;

    if(xIzq>390){
        ctx.clearRect(xMax-190-xIzq, yMax-80, 20+xIzq, 20);
        xIzq=0;
    }

    if(N1 == "" || N2 == ""){
        canvas.width = canvas.width;
    }else if(N1 < 3 || N1 > 27){
        canvas.width = canvas.width;
    }else if(N2 < 3 || N2 > 27 ){
        canvas.width = canvas.width;
    }else if(N1 % 1 != 0 || N2 % 1 != 0){
        canvas.width = canvas.width;
    }
}
