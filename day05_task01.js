// 03. Write a “person” class to hold all the details.
class Person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Gender: ${this.gender}`);
    }
}
const person1 = new Person('Gokul selvam', 28,'Male' );
person1.displayDetails();
//Output:
//Name: Gokul selvam
//Age: 28
//Gender: Male
