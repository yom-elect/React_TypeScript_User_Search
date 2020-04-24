var sum = function (a, b) { return a + b; };
var ans = sum(3, 5);
console.log(ans);
var dog = {};
dog.count;
//classes
var Animal = /** @class */ (function () {
    function Animal(sound) {
        this.sing = "Abcdefgh";
        this.sing = sound;
    }
    Animal.prototype.greet = function () {
        return "hello " + this.sing;
    };
    return Animal;
}());
var lion = new Animal("Roarrrrr");
lion.greet();
//Union
var confused = 5; //"hello "
