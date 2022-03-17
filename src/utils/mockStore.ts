const tempState = {
    cars: [
      {
        stockNumber: 0,
        manufacturerName: 'Audi',
        modelName: 'A1',
        color: 'blue',
        mileage: { number: 20712, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 1,
        manufacturerName: 'BMW',
        modelName: 'X6',
        color: 'silver',
        mileage: { number: 80489, unit: 'km' },
        fuelType: 'Petrol',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 2,
        manufacturerName: 'Skoda',
        modelName: 'Citigo',
        color: 'silver',
        mileage: { number: 98828, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 3,
        manufacturerName: 'Fiat',
        modelName: 'Punto',
        color: 'yellow',
        mileage: { number: 34679, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 4,
        manufacturerName: 'Volkswagen',
        modelName: 'LT',
        color: 'red',
        mileage: { number: 79298, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 5,
        manufacturerName: 'Mercedes-Benz',
        modelName: 'C-Klasse',
        color: 'yellow',
        mileage: { number: 71977, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 6,
        manufacturerName: 'BMW',
        modelName: 'Z1',
        color: 'silver',
        mileage: { number: 74676, unit: 'km' },
        fuelType: 'Petrol',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 7,
        manufacturerName: 'Tesla',
        modelName: 'Model X',
        color: 'silver',
        mileage: { number: 81373, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 8,
        manufacturerName: 'Mercedes-Benz',
        modelName: '207 D - 210 D',
        color: 'green',
        mileage: { number: 83375, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 9,
        manufacturerName: 'Tesla',
        modelName: 'Model X',
        color: 'silver',
        mileage: { number: 23373, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 10,
        manufacturerName: 'Mercedes-Benz',
        modelName: 'C-Klasse',
        color: 'yellow',
        mileage: { number: 71977, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 11,
        manufacturerName: 'BMW',
        modelName: 'Z1',
        color: 'silver',
        mileage: { number: 74676, unit: 'km' },
        fuelType: 'Petrol',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 12,
        manufacturerName: 'Tesla',
        modelName: 'Model X',
        color: 'silver',
        mileage: { number: 81373, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 13,
        manufacturerName: 'Mercedes-Benz',
        modelName: '207 D - 210 D',
        color: 'green',
        mileage: { number: 83375, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      },
      {
        stockNumber: 15,
        manufacturerName: 'Tesla',
        modelName: 'Model X',
        color: 'silver',
        mileage: { number: 23373, unit: 'km' },
        fuelType: 'Diesel',
        pictureUrl: '/images/car.svg'
      }
    ],
    manufacturers: [
      { text: 'All manufacturers', value: '' },
      { text: 'Audi', value: 'Audi' },
      { text: 'BMW', value: 'BMW' },
      { text: 'Chrysler', value: 'Chrysler' },
      { text: 'Dodge', value: 'Dodge' },
      { text: 'Fiat', value: 'Fiat' },
      { text: 'Mercedes-Benz', value: 'Mercedes-Benz' },
      { text: 'Porsche', value: 'Porsche' },
      { text: 'Skoda', value: 'Skoda' },
      { text: 'Tesla', value: 'Tesla' },
      { text: 'Volkswagen', value: 'Volkswagen' }
    ],
    colors: [
      { text: 'All car colors', value: '' },
      { text: 'Red', value: 'red' },
      { text: 'Blue', value: 'blue' },
      { text: 'Green', value: 'green' },
      { text: 'Black', value: 'black' },
      { text: 'Yellow', value: 'yellow' },
      { text: 'White', value: 'white' },
      { text: 'Silver', value: 'silver' }
    ],
    totalCarsCount: 100,
    totalPageCount: 10
  };

export const defaultInitialState = {
    allCars: {
        cars: tempState.cars,
        currentPageCount: 10,
        totalCarsCount: tempState.totalCarsCount,
        totalPageCount: tempState.totalPageCount,
        isError: false,
        isLoading: false
    },
    carById: {
        car: {
            color: "",
            fuelType: "",
            manufacturerName: "",
            mileage: {
                number: 25, unit: "km"
            },
            number: 0,
            unit: "",
            modelName: "",
            pictureUrl: "",
            stockNumber: 0
        },
        isLoading: false,
        isError: false
    },
    favouriteCars: { 
        isCarExistInFavourite: false 
    },
    allCarManufacturers: {
        manufacturers: [{ text: 'Audi', value: 'Audi' }],
        isLoading: false,
        isError: false
    },
    allCarColors: {
        colors: [{ text: 'Blue', value: 'blue' }],
        isLoading: false,
        isError: false
    }
  };
