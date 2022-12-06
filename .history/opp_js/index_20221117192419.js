class Personne {
     Personne(name, age, sexe) {
        this.name = name
        this.age = age
        this.sexe = sexe
        this.hello = function () {
            console.log("salut" + this.name)
        }
    }
}

var p1 = new Personne("kepson", 22, 'M'); 
console.log(this.name)