//1

var mom = {
    firstName: 'Alice',
    lastName: 'Wong',
    eyeColor: 'brown',
    hairColor: 'black'
};

var daughter = {
    firstName: 'Ilene',
    hairColor: 'brown'
};

class Mom {
    constructor(name, surname, eyecolor, haircolor) {
        this.name = name;
        this.surname = surname;
        this.eyecolor = eyecolor;
        this.haircolor = haircolor
    }
    momMe() {
        console.log(`First Name: ${this.name}, Last Name: ${this.surname}, Eye Color: ${this.eyecolor}, Hair Color: ${this.haircolor}`);
    }
    daughterDescription() {
        console.log(`First Name: ${this.name}, Last Name: ${this.surname}, Eye Color: ${this.eyecolor}, Hair Color:  ${this.haircolor}`);
    }
    showInfo() {
        console.log(`First Name: ${this.name}, Last Name: ${this.surname}, Eye Color: ${this.eyecolor}, Hair Color:  ${this.haircolor}`);
    }

}



momDescription = new Mom('Alice', 'Wong', 'brown', 'black');
momDescription.showInfo();
daughterName = new Mom('Ilene', 'Wong', 'brown', 'black');
daughterName.showInfo();

//2

// function Person(name) {
//     this.name = name;
//     this.friends = [];
// }

// Person.prototype.addFriend = function(friend) {
//     this.friends.push(friend);
// };

// Person.prototype.createGreeting = function(other) {
//     return 'Yo ' + other.name + '! from ' + this.name + '.';
// };

// Person.prototype.greet = function(other) {
//     console.log(this.createGreeting(other));
// };

class Person {
    constructor(name,friends) {
        this.name = name,
        this.friends = friends 
    }
    greeting() {
        console.log(`Yo ${this.friends}! From ${this.name}.`);
    }
    lazyGreet() {
        setTimeout(function(){
            console.log(`Yo ${this.friends}! From ${this.name}.`);
        }, 1500
        )}; 
}

friendMe = new Person ('Brooke', 'Jaime')
friendMe.greeting();
friendMe.lazyGreet();

//possibly make extension, if above does not work 


