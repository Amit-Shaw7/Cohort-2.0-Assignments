/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(
  // transactions = [{
  //   timestamp: 1656076800000,
  //   price: 70,
  //   category: 'Food',
  //   itemName: 'Pizza',

  // },]
  transactions
) {

  let categories = [];
  let result = [];
  transactions.map((transaction) => {
    if (!categories.includes(transaction.category)) {
      categories.push(transaction.category);
    }
  });

  for (let index = 0; index < categories.length; index++) {
    const category = categories[index];
    let totalSpent = 0;
    transactions.map((transaction) => {
      if (transaction.category === category) {
        totalSpent += transaction.price;
      }
    });
    result.push({ category, totalSpent });
  }

  return result;

}

const transaction = [
  {
    timestamp: 1656076800000,
    price: 70,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    timestamp: 1656076800000,
    price: 120,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    timestamp: 1656076800000,
    price: 15000,
    category: 'Electronics',
    itemName: 'Mobile',
  },
  {
    timestamp: 1656076800000,
    price: 55000,
    category: 'Electronics',
    itemName: 'Laptop',
  },
];

// calculateTotalSpentByCategory(transaction);


module.exports = calculateTotalSpentByCategory;