// Factory Function 
function createPerson (frist_name, name, age) {
    return {
        frist_name,
        name,
        age,
    }
}

const per1 = createPerson("kheraba", "Diaby", 22);

 console.log(per1);

// End Factory Function 

/* ------------------------------------------------------ */

// Constructor on Object 
function Person (frist_name, name, age){
    this.frist_name = frist_name,
    this.name = name, 
    this.age = age 
}; 
 const per2 = new Person("Kepson", "Diaz", 22);

  console.log(per2);

 // End of Constructor Object

/* ------------------------------------------------------ */