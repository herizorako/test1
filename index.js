// console.log("bonjour");
// function addition (){
//     return 45 + 65;
// }
// console.log(addition());

// function addition (a, b) {
//     return a + b    
// }


// function mutli(a, b){
//     return a * b;
// }

// function soustr( a, b){
//     return a - b;
// }

// function div(a, b){
//     return a / b;
// }

// console.log(soustr(9, 4));
// console.log(div(9, 3));

// let T1= [1, 2, 3, 4];
// console.log(T1[0]);


let T2= [1, 2, 3, 4, 6, 8, 10]

 let some= 0
 for(let i = 0; i < T2.length; i++){
     some += T2[i];
   }
   console.log(some);



 let T3= [1, 2, 3, 4, 6, 8, 10, 12, 13]

 let Pairs = 0;

  for(let i = 0; i < T3.length; i++){
   if(T3[i] % 2 === 0){
     console.log(T3[i] );
    }
 }




 let impairs = 0;

 for(let i = 0; i < T3.length; i++){
   if(T3[i] % 2 !== 0){
     console.log(T3[i] );
  }
 }

let T4= [1, 2, 3, 4, 6, 8, 10, 12, 13]
let nbreplus = 0;

for(let i = 0; i < T4.length; i++){
  if(T4[i] > nbreplus){
    nbreplus = T4[i];
  }
}
console.log(nbreplus);






function fullname(nom, prenom){
   return nom+" "+prenom;
   
}
console.log("nom prenom :" + fullname("Lionel", "Messi" ));




let T5= [1, 2, 3, 4, 6, 8, 10, 12, 13, 16]
let somme = 0;

for (let i = 0; i < T5.length; i++) {
  somme += T5[i];
}
let moyenne = somme / T5.length;
console.log(moyenne)
