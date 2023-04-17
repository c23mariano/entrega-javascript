//string = "cadena de texto" - todo lo que esta entre comillas es una cadena de texto//
//number = 19 
//booleano = true o false//
////variables

///declaracion de una variable

//let numerito;
//let numerito2;

///en este momento no definen nada -> "undefined" - (no definido)

///asigancion de datos

//numerito = 3;   /// se le asigno a numerito un 3
//numerito2 = 3,16;

///declaracion e inicializacion 

//let numerito3 = 1; 

/// tipos de datos que puedo almacenar

/// CONSTANTE
///un espacio de memoria como el de una variable pero la diferencia es que no podemos alterar su contenido
/// la voy a tener que declarar o unicializar con un valor y siempre tendra el mismo

//const PI = 3.14;
//PI = 8; ///ESTO NO SE PUEDE

//const IVA = 0.21; /// si el dia de mañana sube el IVA solo vengo a esta contante y cambio el valer

//tipos de datos que puedo almacenar
//let numerito;
//let texto;


///tipo number
//number = 3; ///interger - entero
//number = 2,7; ///float - flotante

/// tipos de string
//texto = "dixon abreu 52363445 @ ? ¿ $ % &";

//OPERACIONES CON LOS TIPOS DE DATOS NUMERICOS

///SUMA RESTA MULTIPLICACION DIVICION T RESTO

//let resultado; 
//let numerito1 = 3;
//let numerito2 = 8;

//resultado = numerito1 + numerito2;///11
//MULTIPLICACION
//resultado = numerito1 * numerito2;//24
//DIVICION
//resultado = numerito1 / numerito2;//0.37
///RESTO
//resultado = numerito1 % 2;//1 

//OPERACIONES CON STRNGS
//let frase1 = "hola"
//let frase2 = "me llamo pedero"
//let resultadoOperacion; 

/// concatenacion
//resultadoOperacion = frase1 + frase2;//hola me llamo pedro
//resultadoOperacion = "mariano" + "lopez"; //MARIANO LOPEZ

//resultadoOperacion = "hola" + 1;//hola1
//resultadoOperacion = 8 + "hola";//8hola

//VALORES CON LA MUESTRA E INGRESO DE DATOS EL NAVEGADOR

//let mensajito = " hola como estas";

//mostrar el mensaje en la consola
//console.lod(VALOR);

//console.log(mensajito);

//ALERT
// es una jentana de dialogo emergente en el navegador
// el alert lo ve el usuario

//alert(mensajito);

//INGRESO DE DATOS
///PROMPT(MENSAJE)

/*let texto1;
let texto2;
let frasetotal;

texto1 = prompt("ingrese el mensaje");
texto2 = prompt("ingrese otro texto");
frasetotal = texto1 + texto2;/// concatenacion
alert(frasetoal);
*/

/*let numero1;
let numero2;
let total;

numero1 = prompt("ingrese un numero");
numero2 = prompt("ingresa otro numero");
total = numero1 + numero2;
alert("el total es:  " + total);

///prompt siempre va a devolver un strings
// tengo q hacer un proceso de convercion 
*/

//let numero1;
//let numero2;
//let total;

//numero1 = prompt("ingrese un numero");
//numero2 = prompt("ingresa otro numero");

//numero1 = parseFloat(numero1);//parsea un string a un numero de tipo flotante (coma)
//numero2 = parseFloat(numero2)

//numero1= Number(numero1);// convierte al string a numero entero (con coma o entero)
//numero2= Number(numero2);

//numero1 = +numero1; ///convierte al string al tipo de dato que contenga
//numro2 = +numero2; 



//total = numero1 + numero2;
//alert("el total es:  " + total);

//TIPOS DE DATOS BOOLEAN


//let variableBooleana;

//variableBooleana = true;

//variableBooleana = false;

//Sintaxis condicional - if

/*if (CONDICION){
    ///BLOQUE DE CODIGO
}
*/
//CLASE 2


/*if (variableBooleana) {
    
    console.log("este codigo se ve por que variableBooleana es true");

}

console.log("resto del codigo....");
*/

//CLASE 3

/*for (let i = 1; i <= 10 ; i++){
    console.log(i);
}
*/

/*let i = 1;

while (i <= 10) {
    console.log(1);
    i++;
}
*/



var minimo = 1;
var maximo = 50;
var aleatorio = Math.floor(Math.random() * maximo - minimo +1) + minimo;
var intentos = 0;
var nombreUsuario = prompt("Bienvenidos a este juego, ingresa tu nombre");
var numero;


for(intentos; intentos < 10; intentos++){
    numero = parseInt(prompt(nombreUsuario+" , Ingresa un numero entre el "+minimo+" y el "+maximo));

    if(numero >= minimo && numero <= maximo){
            if(numero < aleatorio){
                alert("Estas cerca! pero el numero es mas alto");
            } else if(numero > aleatorio){
                alert("Estas cerca! pero el numero es mas bajo");
            } else if(numero == aleatorio){
                break;
            }
    }   else{
            alert("Ingresa un numero entre "+minimo+" y "+maximo);
    }
}

if(numero == aleatorio){
    alert("Excelente! adivinaste el numero en "+intentos+" intentos");
} else{
    alert("Ya no te quedan mas intentos, suerte en la proxima!")
}


