export type car= {
    stockNumber: number;
    manufacturerName: string;
    modelName: string;
    color: string;
    mileage: {
        number: number;
        unit: string;
    };
    fuelType: string;
    pictureUrl: string;
};


export type cars= car[];

export type carsRequest= {
    page: number,
    sortBy?: string, 
    manufacturer?: string, 
    color?: string
}

export type carsResponse= {
    data: {
        cars: cars,
        totalPageCount: number,
        totalCarsCount: number
    }
}

export type manufacturer= {
    name: string,
    models: {
        name: string
    }[]
  }

export type Manufacturers = {
    data: {
        "manufacturers": manufacturer[];
    };
}