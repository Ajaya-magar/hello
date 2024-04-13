
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];








let mysentence=""

let Excuse=document.getElementById("paragraph")

function randnom(array) {

   
  return Math.floor(Math.random() * array.length);
   
   



    

}

function excuf (first,second,third,fourth){
    mysentence=who[randnom(first)] + '  ' + action[randnom(second)] + '  ' + what[randnom(third)] + '  ' + when[randnom(fourth)]
  return mysentence
}

Excuse.innerText =excuf(who,action,what,when)