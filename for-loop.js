const prompt = require("prompt-sync")({ sigint: true }); 

let i; //puede declararse por fuera o por dentro del for

for(let i=0 ; i<=10 ; i+=2){
    console.log(i);
}

for(let i=10 ; i>=0 ; i--){
    console.log(i);
}