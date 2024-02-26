// ==== Problem #4 ====
// The accounting team needs all the years from every car on the lot. Execute a function that will return an array from the dealer data containing only the car years and log the result in the console as it was returned.

//let inventory=require("./data.js");

function carYears(arr)
{
    if(Array.isArray(arr))
    {
    let car_years=[]
    for(let car of arr)
    {
        car_years.push(car.car_year);

    }
    return car_years
}
};

module.exports=carYears;

//console.log(carYears(inventory));
