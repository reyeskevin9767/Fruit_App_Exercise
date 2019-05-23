import {choice, remove} from './helpers';
import fruits from './foods';

var randomFruit = choice(fruits);
var fruitLeft = remove(fruits, randomFruit);


console.log("I would like one " + randomFruit, ", please");
console.log("Here you go: " + randomFruit);
console.log("Delicious! May I have another?");
console.log("I'm sorry, we're all out. We have " + fruitLeft+ " left.");