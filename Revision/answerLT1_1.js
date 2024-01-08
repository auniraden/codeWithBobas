let cars = [
    {
      "color": "purple",
      "car_type": "minivan",
      "price": 170103,
      "capacity": 7,
      "date": "2023-01-01"
    },
    {
      "color": "red",
      "car_type": "station wagon",
      "price": 181323,
      "capacity": 5,
      "date": "2023-01-05"
    },
    {
    "color": "blue",
    "car_type": "minivan",
    "price": 123223,
    "capacity": 7,
    "date": "2023-02-01"
    },
    {
    "color": "red",
    "car_type": "cabrio",
    "price": 161522,
    "capacity": 2,
    "date": "2023-02-03"
    },
    {
   "color": "blue",
   "car_type": "cabrio",
   "price": 161522,
   "capacity": 2,
   "date": "2023-03-04"
    }
  ]

// answer #1: filter only need red car
  const redCars = cars.filter(function(car){
        return car.color === 'red';
  })
  console.log(redCars);
  // or can be written as: const redCars = cars.filter(car => car.color === 'red');

  //answer #2: transforms objects into different objects, and classify the cars into three groups based on their size
  const carSizes = cars.map(car => {
    let size;
    if(car.capacity >= 1 && car.capacity <= 3){
        size = "small car";
    } else if(car.capacity >= 4 && car.capacity <= 5){
        size = "medium car";
    } else if(car.capacity >= 6 && car.capacity <= 9){
        size = "large car";
    } else{
        size = "unknown";
    }
    return {
        ...car,
        size
    }
  } )
  console.log(carSizes);

  //answer #3: sort cars based on capacity (descending order)
const descendingCar = cars.sort(function (x , y){
    return y.capacity - x.capacity;
});
console.log(descendingCar);

//answer #4: Find mean of car sales(price) for each month
const meanCarSales = cars.reduce((acc, car) => {
    const month = car.date.split('-')[1];
    if(!acc[month]){
        acc[month] = [];
    }
    acc[month].push(car.price);
    return acc;
}, {});
console.log(meanCarSales);


//answer #5: Find total sales(price) for each car type
const totalSales = cars.reduce((acc, car) => {
    if(!acc[car.car_type]){
        acc[car.car_type] = 0;
    }
    acc[car.car_type] += car.price;
    return acc;
}, {});
console.log(totalSales);
