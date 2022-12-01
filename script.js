alert("     CAPTACION DE SOCIOS \nDEL CLUB 'ORIENTE PETROLERO'")
let nombre = ""
nombre = prompt("INGRESE SU NOMBRE POR FAVOR")
alert("BIENVENIDO " + (nombre) + " POR FAVOR SELECCIONA LAS OPCIONES CORRECTAMENTE")

let option = 0
let pointer = 0
let pay = 0
do {
    option = Number(prompt(" 1.- Registro de NUEVO SOCIO \n 2.- PAGO DE APORTES \n 3.- VER CATEGORIAS \n 0.- SALIR"))
    if (option == 1) {
        pointer = Number(prompt("Seleccione la categoria \n COSTO ADICIONAL DEL CARNET 10$ \n 1.- Benefactor \n 2.- Diamante \n 3.- Platino \n 4.- General \n 5.- Curva \n 0.- SALIR"))
        switch (pointer) {
            case 1:
                pay = prompt("SELECCIONE METODO DE PAGO \n 1.-ANUAL $300 \n 2.- SEMESTRAL $170")
                if (pay===1) {
                    alert("Gracias por hacerte SOCIO BENEFACTOR SEMESTRAL")
                } else if(pay===2){
                    alert("Gracias por hacerte SOCIO BENEFACTOR SEMESTRAL")  
                }else{
                    alert("Ingrese una opcion correcta por favor")
                }
                break
            case 2:
                pay = prompt("SELECCIONE METODO DE PAGO \n 1.-ANUAL $200 \n 2.- SEMESTRAL $120")
                alert("Gracias por hacerte SOCIO DIAMANTE")
                break
            case 3:
                pay = prompt("SELECCIONE METODO DE PAGO \n 1.-ANUAL $150 \n 2.- SEMESTRAL $80")
                alert("Gracias por hacerte SOCIO PLATINO")
                break
            case 4:
                pay = prompt("SELECCIONE METODO DE PAGO \n 1.-ANUAL $100 \n 2.- SEMESTRAL $60")
                alert("Gracias por hacerte SOCIO GENERAL")
                break
            case 5:
                pay = prompt("SELECCIONE METODO DE PAGO \n 1.-ANUAL $70 \n 2.- SEMESTRAL $50")
                alert("Gracias por hacerte SOCIO CURVA")
                break

            default:
                break
        }

    } else {


    }


} while (option!=0)
  alert("Por favor ingresa una opcion correcta")