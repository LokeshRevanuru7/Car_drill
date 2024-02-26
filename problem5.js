// ==== Problem #5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the array you just obtained from the previous problem, find out how many cars were made before the year 2000 and return the array of older cars and log its length.


//let inventory=require("./data.js");

function carsOlderThanYear(arr,year)
{
  if(Array.isArray(arr)&&year)
 {
    let older_cars=[];
    for(let car of arr)
    {
        if(car.car_year<year)
        {
            older_cars.push(car.car_model)

        }
    }
    return older_cars.length;
 }
};

module.exports=carsOlderThanYear;

//console.log(carsOlderThanYear(inventory,2000));
