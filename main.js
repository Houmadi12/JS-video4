let name = 'Yuna'
let number = 6;

// if(name === "Yuna"){
//     Document.write('oui')
//     let number = 6;

//     if(number === 6)
//         document.write('oui')

// } else {
//     Document.write('Non')   
// }


if(number < 0){
     document.write('< 0');
} else if (number >= 10){
    document.write(">= 10");
}else{
    document.write('number');
}

switch(number){
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
        document.write("number < 5");
        break;

    case 5:
        document.write("number < 5");
        break;



    default:
        alert("Pas de valeur reconnue...")
}