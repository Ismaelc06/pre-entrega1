alert("     CAPTACION DE SOCIOS \nDEL CLUB 'ORIENTE PETROLERO'")
let nombre= ""
nombre = prompt("INGRESE SU NOMBRE POR FAVOR")
alert("BIENVENIDO " +(nombre) +" POR FAVOR SELECCIONA LAS OPCIONES CORRECTAMENTE")

let option = 0
let pointer = 0
let pay = 0
do {
    option = Number(prompt(" 1.- Registro de NUEVO SOCIO \n 2.- PAGO DE APORTES \n 3.- VER CATEGORIAS \n 0.- SALIR"  ))
    if (option==1) {
        pointer = Number(prompt("Seleccione la categoria \n 1.- Benefactor \n 2.- Diamante \n 3.- Platino \n 4.- General \n 5.- Curva \n 0.- SALIR"))
        switch (pointer) {
            case 1:
                pay = prompt("SELECCIONE METODO DE PAGO \n 1.-ANUAL $200 \n 2.- SEMESTRAL $120")
                break
        
            default:
                break
        }
        
    } else {
        
    }

    
} while (condition);