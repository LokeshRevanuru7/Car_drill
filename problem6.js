// ==== Problem #6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Execute a function and return an array that only contains BMW and Audi cars.  Once you have the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.


function BMWAndAudiCars(arr)
{
    if(Array.isArray(arr))
    {
    let BMW_AUDI=[];
    for(let car of arr)
    {
        BMW_AUDI.push(car.car_make);
    }

    return JSON.stringify(BMW_AUDI);
}
return [];
};

module.exports=BMWAndAudiCars;