let budgetValue = 0;
let totalExpensesValue = 0;

const expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

for (const [categoryName, amountValue] of expenseEntries) {
  totalExpensesValue += amountValue;
}

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

let balanceColor = "green";

function updateBalanceColor() {
  const balance = calculateBalance();
  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(category) {
  let categoryTotal = 0;
  for (const [categoryName, amountValue] of expenseEntries) {
    if (categoryName === category) {
      categoryTotal += amountValue;
    }
  }
  return categoryTotal;
}

function calculateLargestCategory() {
  const categoriesData = [];

  const categoryNames = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  for (const categoryName of categoryNames) {
    const categoryTotal = calculateCategoryExpenses(categoryName);
    categoriesData.push([categoryName, categoryTotal]);
  }

  let largestCategory = categoriesData[0];
  for (const [categoryName, categoryTotal] of categoriesData) {
    if (categoryTotal > largestCategory[1]) {
      largestCategory = [categoryName, categoryTotal];
    }
  }

  return largestCategory[0];
}

function addExpenseEntry(expenseEntry) {
  console.log("Adding expense entry:", expenseEntry);
  expenseEntries.push(expenseEntry);
  totalExpensesValue += expenseEntry[1];
}
