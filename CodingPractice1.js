/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:

§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.

§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK �
*/ 

let dataOne = { 
    johnMass: 92,
    johnHeight: 1.95,
    markMass: 78,
    markHeight: 1.69
}

let dataTwo = {
    johnMass: 85,
    johnHeight: 1.76,
    markMass: 95,
    markHeight: 1.88
}


function calculateBMI (height, weight) { 
    return weight / (height * height); 
}

let johnResultOne = calculateBMI (dataOne.johnHeight, dataOne.johnMass);
let markResultOne = calculateBMI (dataOne.markHeight, dataOne.markMass);
let markHigherBMI = markResultOne > johnResultOne;


let johnResultTwo = calculateBMI (dataTwo.johnHeight, dataTwo.johnMass);
let markResultTwo =calculateBMI (dataTwo.markHeight, dataTwo.markMass);
markHigherBMI = markResultTwo > johnResultTwo;



if (johnResultOne > markResultOne ) {
	console.log(`John has the higher BMI of ${johnResultOne}`);
} else { 
	console.log(`Mark has the higher BMI of ${markResultOne}`);
	}






