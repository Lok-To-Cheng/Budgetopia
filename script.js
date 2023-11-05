let transactions = [];
let monthlyBudget = 0;
let monthlyRewards = 0;

function addTransaction() {
    const transactionName = document.getElementById("transaction-name").value;
    const transactionAmount = parseFloat(document.getElementById("transaction-amount").value);
    const categoryFilter = document.getElementById("category-filter").value;

    if (!transactionName || isNaN(transactionAmount)) {
        alert("Please enter valid transaction details.");
        return;
    }

    transactions.push({
        name: transactionName,
        amount: transactionAmount,
        category: categoryFilter,
    });

    document.getElementById("transaction-name").value = "";
    document.getElementById("transaction-amount").value = "";

    updateTransactionTable();
    updateBudgetWarning();
    updateTotals();
}

function updateTotals() {
    const totalSpent = transactions.reduce((total, transaction) => total + transaction.amount, 0);
    const selectedCategory = document.getElementById("category-filter").value;
    let categoryTotal = 0;

    if (selectedCategory !== "all") {
        categoryTotal = transactions
            .filter(transaction => transaction.category === selectedCategory)
            .reduce((total, transaction) => total + transaction.amount, 0);
    }

    document.getElementById("total-spent").textContent = `Total Money Spent: $${totalSpent.toFixed(2)}`;
    document.getElementById("category-total").textContent = `Category Total: $${categoryTotal.toFixed(2)}`;
}

function updateBudgetWarning() {
    const budgetInput = document.getElementById("monthly-budget");
    const monthlyBudgetValue = parseFloat(budgetInput.value);

    if (isNaN(monthlyBudgetValue)) {
        alert("Please enter a valid monthly budget.");
        return;
    }

    monthlyBudget = monthlyBudgetValue;

    const totalSpent = transactions.reduce((total, transaction) => total + transaction.amount, 0);
    const warningMessage = document.getElementById("warning-message");

    if (totalSpent > monthlyBudget) {
        warningMessage.textContent = "Budget exceeded!";
    } else {
        warningMessage.textContent = "";
    }
}

function setMonthlyBudget() {
    const budgetInput = document.getElementById("monthly-budget");
    monthlyBudget = parseFloat(budgetInput.value);

    updateBudgetWarning();
    document.getElementById("monthly-budget-display").textContent = `Monthly Budget: $${monthlyBudget.toFixed(2)}`;
}

function addCategoryOption() {
    const newCategory = prompt("Enter a new category option:");
    if (newCategory) {
        const categoryFilter = document.getElementById("category-filter");
        const option = document.createElement("option");
        option.value = newCategory;
        option.text = newCategory;
        categoryFilter.appendChild(option);
    }
}
function updateTransactionTable() {
    const tableBody = document.getElementById("transaction-rows");
    tableBody.innerHTML = "";

    transactions.forEach((transaction, index) => {
        const row = tableBody.insertRow();
        row.innerHTML = `
            <td>${transaction.name}</td>
            <td>$${transaction.amount.toFixed(2)}</td>
            <td class="category-${transaction.category}">${transaction.category}</td>
            <td><button onclick="deleteTransaction(${index})">Delete</button></td>
        `;
    });
}
function deleteTransaction(index) {
    transactions.splice(index, 1);
    updateTransactionTable();
    updateBudgetWarning();
    updateTotals();
}

document.getElementById("add-transaction").addEventListener("click", addTransaction);
document.getElementById("category-filter").addEventListener("change", () => {
    updateTransactionTable();
    updateTotals();
    updateChart();
});
document.getElementById("set-monthly-budget").addEventListener("click", setMonthlyBudget);
document.getElementById("add-category").addEventListener("click", addCategoryOption);

updateTransactionTable();

