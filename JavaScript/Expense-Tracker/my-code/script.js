const balanceEl = document.getElementById('balance');
const incomeEl = document.getElementById('income-amount');
const expensesEl = document.getElementById('expense-amount');
const transactionListEl = document.getElementById('transaction-list')
const amountEl = document.getElementById('amount')
const descriptionEl = document.getElementById('description')
const transactionFormEl = document.getElementById("transaction-form");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function updateUI(){
    transactionListEl.innerHTML = "";

    let income = 0;
    let expense = 0;

    transactions.forEach(amt => {
        const li = document.createElement("li");

        li.textContent = `${amt.description} ${amt.amount}`;
        li.classList.add(amt.amount)

        transactionListEl.appendChild(li);

        if(amt.amount > 0){
            income += amt.amount;
        }
        else{
            expense += amt.amount;

        }
        
    });
    incomeEl.textContent = `$${income.toFixed(2)}`;
    expensesEl.textContent = `${expense.toFixed(2)}`;
    balanceEl.textContent = `${(expense + income).toFixed(2)}`
}

const submit = transactionFormEl.addEventListener("submit", (e) => {
    e.preventDefault();

    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value)

    transactions.push({
        // ! push the data like stack
        id:Date.now(),
        description,
        amount
    })

    updateLocalStorage();
    updateUI();

    descriptionEl.value = "";
    amountEl.value = "";

})

function updateLocalStorage(){
    localStorage.setItem("transactions", JSON.stringify(transactions));
}





