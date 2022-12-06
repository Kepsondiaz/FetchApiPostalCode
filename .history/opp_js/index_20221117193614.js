let Personne = class {
     constructor(name, age, sexe) {
        this.name = name
        this.age = age
        this.sexe = sexe
        this.hello = function () {
            return "salut " + this.name
        }
    }
}

var p1 = new Personne("kepson", 22, 'M'); 
console.log(p1.hello())