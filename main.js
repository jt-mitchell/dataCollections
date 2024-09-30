let radius = 5
const Pi = 3.1415;
const area = Pi * radius * radius;
let newradius = 25

let plants = 20
let plantSpace = Pi * 0.8 * 0.8

//plants double every week. 1, 2, 3 weeks of growth as inputs

let week1 = plants
let week2 = plants * 2
let week3 = plants * 4



//Max capacity of garden

let maxCap = plantSpace * plants
//console.log  to test
// console.log(maxCap);


//Week 1 code - 20 plants.
if( plants > .8 * maxCap)  {
    //do this
    console.log("The plants need to be pruned.");
} else if(plants < .5 * maxCap) {
    //do this
    console.log("More plants can be planted.");
}else {
    //do this
    console.log("Monitor the plants. They are growing at an acceptable rate.");
}

//Week 2 plants - 40 plants

if( week2 > .8 * maxCap)  {
    //do this
    console.log("The plants need to be pruned.");
} else if(week2 < .5 * maxCap) {
    //do this
    console.log("More plants can be planted.");
}else {
    //do this
    console.log("Monitor the plants. They are growing at an acceptable rate.");
}

//Week 3 plants

if( week3 > .8 * maxCap)  {
    //do this
    console.log("The plants need to be pruned.");
} else if(week3 < .5 * maxCap) {
    //do this
    console.log("More plants can be planted.");
}else {
    //do this
    console.log("Monitor the plants. They are growing at an acceptable rate.");
}

//onsole.log(week3);

//Predict plant growth after week 1, 2 and 3


// Part 2
// Starting with 100 plants. Determine the growth if the plants can't be pruned for 10 weeks.
//Determine Radius of the expanded garden.
let plant100 = 100
let newPlantArea = plant100 * plantSpace
let newMaxCap = 51200 * plantSpace
console.log("The newPlantArea is" + newPlantArea);
console.log("The new max area is " + newMaxCap );
console.log("The amount of additional space is " + (newPlantArea - maxCap));

console.log("The new area of the expanded garden is " +  Pi * newradius * newradius);


//Part III