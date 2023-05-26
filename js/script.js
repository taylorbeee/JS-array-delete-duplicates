var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];

// console.log(groceries);

var deleteDupliicates = function (list) {
  var cleanList = [];

  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
  return cleanList;
};

var newGroceries = deleteDupliicates(groceries);
// console.log(newGroceries.length);

newGroceries.forEach(function (element, index) {
  console.log(`${index + 1}. ${element}`);
});
