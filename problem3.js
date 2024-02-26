// ==== Problem #3 ====
// The marketing team wants the car models listed alphabetically on the website. Execute a function to Sort all the car model names into alphabetical order and log the results in the console as it was returned.

//let inventory=require("./data.js")

function carModels(arr)
{
    if(Array.isArray(arr))
    {
    let car_models=[];
    for(let car of arr)
    {
        car_models.push(car.car_model);
    }
    car_models.sort();
    return car_models
}
};

module.exports=carModels;

//console.log(carModels(inventory));
