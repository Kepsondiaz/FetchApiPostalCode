let Personne = class {
     constructor(name, age, sexe) {
        this.name = name
        this.age = age
        this.sexe = sexe
        this.hello = function () {
            return "salut " + this.name
        }, 

         function life(){
            return " la vie de " + this.name + " est trop cool "
        } 
    }
}

var p1 = new Personne("kepson", 22, 'M'); 
console.log(p1.hello())
console.log(p1.life)