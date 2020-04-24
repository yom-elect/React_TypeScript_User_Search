const sum = (a: number, b: number) => a + b;

const ans = sum(3, 5);
console.log(ans);
/*
Type Script Types
boolean, number , string
string[]or Array<string>
object
undefined, null 

Tuple : [string , number]

enum   Size {Small , Medium , Large} 

Any any

void for functions

never  error throwing

interface RobotArmy {
    count : number,
    type: string,
    magic: string 
}
*/

//Type Assertion
interface RobotArmy {
  count: number;
  type: string;
  magic?: string;
}

let dog = {} as RobotArmy;
dog.count;

//classes
class Animal {
  public sing: string = "Abcdefgh";
  constructor(sound: string) {
    this.sing = sound;
  }

  greet() {
    return `hello ${this.sing}`;
  }
}

let lion = new Animal("Roarrrrr");
lion.greet();

//Union
let confused: string | number = 5; //"hello "
