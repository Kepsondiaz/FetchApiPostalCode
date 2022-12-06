class Personne{
     constructor(name, age, sexe) {
        this.name = name
        this.age = age
        this.sexe = sexe
        this.hello = function () {
            return "salut " + this.name
        }
    }

   get life() {
     return this.ages
   }
   ages(ans){
    return ans + ' ans'
   }
}

var p1 = new Personne("kepson", 22, 'M'); 
console.log(p1.hello())
console.log(p1.life)
console.log(p1.ages(22))
