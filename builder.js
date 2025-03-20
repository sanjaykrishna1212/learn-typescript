
// without design pattern
// class Car
// {
//     constructor ( make, model, year, color, hasGPS, hasSunroof )
//     {
//         this.make = make;
//         this.model = model;
//         this.year = year;
//         this.color = color;
//         this.hasGPS = hasGPS || false;     // Optional parameter
//         this.hasSunroof = hasSunroof || false; // Optional parameter
//     }

//     describe()
//     {
//         return `${this.year} ${this.make} ${this.model} in ${this.color} color with GPS: ${this.hasGPS} and Sunroof: ${this.hasSunroof}`;
//     }
// }

// // Creating the object
// const car = new Car( 'Tesla', 'Model S', 2024, 'Red', true, false );
// console.log( car.describe() );



// Car class remains simple, no complex constructor
class Car
{
    constructor ( builder )
    {
        this.make = builder.make;
        this.model = builder.model;
        this.year = builder.year;
        this.color = builder.color;
        this.hasGPS = builder.hasGPS;
        this.hasSunroof = builder.hasSunroof;
    }

    describe()
    {
        return `${this.year} ${this.make} ${this.model} in ${this.color} color with GPS: ${this.hasGPS} and Sunroof: ${this.hasSunroof}`;
    }
}



class CarBuilder
{
    constructor ( make, model )
    {
        this.make = make;
        this.model = model;
    }
    setYear( year )
    {
        this.year = year;
        return this;
    }

    setColor( color )
    {
        this.color = color;
        return this;
    }
    addGPS()
    {
        this.hasGPS = true;
        return this;
    }
    addSunroof()
    {
        this.hasSunroof = true;
        return this;
    }
    build()
    {
        console.log(this);
        return new Car( this ); // Builds and returns the Car object
    }
}

// Creating the object using the builder

const car = new CarBuilder( 'Tesla', 'Model S' )
    .setYear( 2024 )
    .setColor( 'Red' )
    .addGPS().addSunroof(false)
    .build();

console.log( car.describe() );``