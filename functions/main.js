//opdracht 1 van functions
let Temp = 9;

function idk (params) {
    if (Temp <= 10 ) {
        alert ('het is koud')
    } if (Temp <= 16) {
        document.body.innerHTML += 'het is niet warm je kan beter een jas aandoen,'
        document.body.innerHTML += '<br>';
    }  if (Temp <= 24) {
        document.body.innerHTML+= 'je hoeft geen jas aan vandaag'
        document.body.innerHTML += '<br>';
    }if (Temp >= 30) {
     document.body.innerHTML += 'je kan maar beter goed insmeren'  
     document.body.innerHTML += '<br>';
    }
    
}

idk(Temp)

// opdracht 2 van functions
const toetsCijfer = 6;
const toetsCijfer1 = 4;
const toetsCijfer2 = 9;
function cijfer (gebuikerCijfer) {
    if (gebuikerCijfer < 5.5) {
        document.body.innerHTML += 'gebruiker heeft een onvoldoende gehaald'
        document.body.innerHTML += '<br>';
    } if(gebuikerCijfer >= 5.5) {
        document.body.innerHTML += 'gebruiker heeft een voldoende gehaald'
        document.body.innerHTML += '<br>';
    }
}

cijfer(toetsCijfer)
cijfer(toetsCijfer1)
cijfer(toetsCijfer2)

// opdracht 3 begreep ik niet dus die heb ik helaas niet kunnen maken :(