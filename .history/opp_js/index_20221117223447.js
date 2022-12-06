class Personne{
     constructor(name, age, sexe) {
        this.name = name
        this.age = age
        this.sexe = sexe
        this.hello = function () {
            return "salut " + this.name
        }
    }
    animal = {
        nameAnimal: "Skoopie",
        raceAnimal: "berge Allemand",
        nomAnimal() {
            return this.nameAnimal + ' est de race: ' + this.raceAnimal 
        }
    }
    appelAnimal(){
        return this.animal.nomAnimal()
    }
   
}


class Animal{
    constructor()
     p1 = new Personne("kepson", 22, 'M'); 
    callPersonne(){
        return p1
    } 
}

var a1 = new Animal(); 
console.log(a1.callPersonne())

var p1 = new Personne("kepson", 22, 'M'); 
console.log(p1.hello())
console.log(p1.appelAnimal())
