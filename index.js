// class Person {
//     constructor (name) {
//         this.name = name;
//     }
//     greet(other) {
//         console.log(`Hello ${other.name}, I'm ${this.name}`);

//     }
// }

// aPerson = new Person('Veronica');
// aPerson2 = new Person('Paul');
// aPerson = greet(aPerson2);

//prototype example below, object oriented javascript 

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hi, my name is ${this.name}`);
    }
    describe() {
        console.log(`${this.name}, ${this.age} years old.`)
    }
    //static method it applies to the class as a whole and not the individual instances
    static introduce(person) {
        console.log(`This is ${person.name}, they are ${person.age} years old.`)
        //this keyword is not used because it is not the original instance
    }

}

const me = new Person('Brooke', 27);
const me2 = new Person(`Shadow`, `11`);
me.sayHello();
me.describe();

Person.introduce(me2);
//instanct of person, all you have to do is pass the object 


// making an extension of a class
// can change name with a new object, and does not relate to the obect of 'brooke' in const me

class Teacher extends Person {

    teachMe(subject) {
        console.log(`${this.name} teaches ${subject} in school`)
    }

}

const teacher = new Teacher(`Mr.Binkie`);
teacher.teachMe(`clowning`);

 //static method it applies to the class as a whole and not the individual instances


