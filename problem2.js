// ==== Problem #2 ====
// The dealer needs the information on the last car in their inventory. Execute a function to find what the make and model of the last car in the inventory is?  Log the make and model into the console in the format of:
"Last car is a *car make goes here* *car model goes here*"


//let inventory=require("./data.js");

function lastCar(arr)
{
    if(Array.isArray(arr))
    {
    for(let car of arr)
    {
        if(car.id===arr.length)
        {
            return `last car is a ${car.car_make} ${car.car_model}`
        }
    }
}
};

module.exports=lastCar;

//console.log(lastCar(inventory));

