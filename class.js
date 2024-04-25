class Human {
  /**
   * the constructor method is a
   * special method for creating and initializing
   * an object created with a class.
   */

  //fields used for defining constant variables
  #eyes = 2;
  legs = 2;
  #arms = 2;
  hair = true;
  nose = 1;
  mouth = 1;
  ear = 2;
  toes = 10;

  constructor(name, hairColor, height, weight, gender, complexion) {
    //initialize the chararcters
    this.name = name;
    // this.eyes = eyes;
    // this.legs = legs;
    // this.arms = arms;
    // this.hair = hair;
    // this.nose = nose;
    // this.mouth = mouth;
    // this.ear = ear;
    this.hairColor = hairColor;
    this.height = height;
    this.weight = weight;
    this.gender = gender;
    this.complexion = complexion;
  }
  //method
  //defining a behavior or action
  //can be defined using a function though
  //we dont need the function keywork

  //method

  see() {
    return this.name + "is seeing with" + this.eyes + "eyes";
  }
  walk() {
    return this.name + "is walking";
  }

  //Getter
  get run() {
    return this.name + "is running ";
  }
  //static property is used to make a variable unique to the class

  //static variable
  static displayName = "Human";

  //static method
  static getName() {
    return this.name;
  }
}
// calling a class or using a class
const evalsam = new Human("evalsam", 2, 2, 2, "black", 1, 1, 2);

console.log(evalsam.walk());
class Monkey extends Human {
  //constant variable
  tail = 1;
  hair = "more";
  constructor(intel, name, hair, gender, height, weight, complexion) {
    super(name, hair, gender, height, weight, complexion);
    this.intel = intel;
  }
  get hop() {
    return this.name + "is jumping ftom tree one to tree teo";
  }
}
const tom = new Monkey(34, "tom", "grey", "female", 24, 50, "silver");
console.log(tom);

//classwork create a class for car
class car {
  constructor(name, carColor, carBrand, speed, wheels) {
    this.name = name;
    this.carColor = carColor;
    this.carBrand = carBrand;
    this.speed = speed;
    this.wheels = wheels;
  }
drift () {
    return this.name + "is drfting with" + this.speed + "speed";
}

  get speedy () {
    return this.name + "is speeding";
  }
}
const bugatti = new car("bugatti", "red", "brabus", 200);
console.log(bugatti);
