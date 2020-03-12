//Javascript meal generator v1.0
const menu = {
  _courses : {
    appetizers: [],
    mains: [],
    desserts: []
  },
  get appetizers() {
    return this._courses.appetizers;
  },
  get mains() {
    return this._courses.mains;
  },
  get desserts() {
    return this._courses.desserts;
  },
  set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
  },
  set mains(mains) {
    this._courses.mains = mains;
  },
  set desserts(desserts) {
    this._courses.desserts = desserts;
  },
  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },
  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };
    return this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },
  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}. The total price is ${totalPrice}.`;
  }
};

menu.addDishToCourse('appetizers', 'soup', 4.99);
menu.addDishToCourse('appetizers', 'salad', 5.75);
menu.addDishToCourse('appetizers', 'breadsticks', 6.99);
menu.addDishToCourse('appetizers', 'shrimp', 11.99);

menu.addDishToCourse('mains', 'steak and fries', 28.00);
menu.addDishToCourse('mains', 'salmon and rice', 25.00);
menu.addDishToCourse('mains', 'ginger chicken', 23.00);
menu.addDishToCourse('mains', 'mahi mahi and terryaki', 27.00);

menu.addDishToCourse('desserts', 'vanilla ice cream', 4.00);
menu.addDishToCourse('desserts', 'mochi balls', 8.00);
menu.addDishToCourse('desserts', 'pb and j', 6.00);
menu.addDishToCourse('desserts', 'spaghetti', 11.00);

let meal = menu.generateRandomMeal();
console.log(meal);
