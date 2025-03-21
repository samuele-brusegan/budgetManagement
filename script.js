let conto = new Classes("John Doe", );
let value = document.getElementById("value");
let type = document.getElementById("type");
let date = document.getElementById("date");

function createTransaction() {
    conto.addTransaction(new Transaction(value.value, type.value, date.value));
    conto.showConto("conto");
}

conto.showConto("conto");