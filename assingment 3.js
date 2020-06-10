

   //constructor notation with properties and methods

function Car (make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.start = function(){
        var vroom = 'Vroom Vroom';
        return vroom;
    }
}
    var myCar = new Car("toyora", "camry", "2020", "Red");
    var myCar2 = new Car("tesla", "x", "2019", "grey");
