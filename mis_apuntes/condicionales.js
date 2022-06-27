//let edad = prompt("porfavor ingresa tu edad")

// if(edad > 18 && edad < 25) {
//     console.log("Wow eres Mayor de edad!!")
// } else if(edad >= 25){
//     console.log("Wow eres ya eres un dinosaurio!! 😋")
// } else{
//     console.log("mmm.. parece que no eres mayor de edad, auneres una bebeshita")
// }
let menu = "1.- coca-cola,\n2.- agua de limon\n3.- agua de horchata\n4.- awita de uwu\n"
let deccision = prompt("elige tu bebida favorita\n" + menu)

switch(Number(deccision)){
    case 1:
        console.log("a mi tambien me encanta la coquita")
    break;
    case 2:
        console.log("como que se antoja una limonada")
    break;
    case 3:
        console.log("como que te gusta el agua de horchata?")
    break;
    case 4:
        console.log("No! fan de beastears! que le estas haciendo a mi Perro!!")
    break;
    default:
        console.log("la neta no se ingles no te entendi")
}