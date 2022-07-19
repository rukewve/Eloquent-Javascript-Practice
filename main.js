let book = 1;
let amount = 2;
for (let i = 0; i < 10; i++) {
    book *= amount;
}
console.log(book);

const hummus = function (factor) {
    const ingredient = function (amount, unit, name) {
        var ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount}, ${unit}, ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

console.log(hummus(10));
