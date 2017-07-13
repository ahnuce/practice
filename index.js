function Pokemon(name){
  this.name = name
}

Pokemon.growl = function(){
  console.log(this.name + "!!!!!")
}
function Pikachu(){
  Pokemon.call(this, 'pikachu')
}
Pikachu.prototype = Object.create(Pokemon.prototype)

// var pikachu = new Pokemon('pikachu')
var pikachu = new Pikachu()
var squirtle = new Pokemon('squirtle')
console.log(pikachu, squirtle, Pokemon.growl());




//
//
// function Superhero(name, power, weakness){
//           this.name = name;
//           this.power = power;
//           this.weakness = weakness;
//
// };
//
// Superhero.prototype.phrase = function(){
//   console.log(this.name + ' will use ' + this.power + ' to destroy you!')
// }
//
// var batman = new Superhero("Batman", "Money + Detective Skills + Ninja skills", "no super powers");
// var superman = new Superhero("Superman", "strength + flight + eye lasers + x-ray vision", "kryptonite");
// var theFlash = new Superhero("The Flash", "speed + healing + time travel", "running too fast");
//
// console.log(batman.phrase(), superman.phrase());
//





//
// function Superhero(name){
//   this.name = name
// }
//
// Superhero.prototype.phrase = function(){
//   console.log(this.name + " will save the day!")
// }
//
// function Batman(){
//   Superhero.call(this, 'batman')
// }
// Batman.prototype = Object.create(Superhero.prototype)
//
// var batman = new Batman()
//
// console.log(batman.phrase());
