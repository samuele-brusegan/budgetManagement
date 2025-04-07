import * as Ctrl from "../../controllers/Controller.js";
//import {Chart} from "../../node_modules/chart.js/auto/auto.js"

let pieChart;

updateBar()

updatePieChart()

function updateBar() {
    let accList = Ctrl.getAccountList()
    let currAcc = Ctrl.getCurrAccount()
    // accList.forEach((val) => {console.log(val)});
    
    let totalIncome = 0;
    let total = 0;
    // accList.forEach((account, i) => {
        // console.log("Transactions:", account.transactions);
        currAcc.transactions?.forEach((transaction) => {
            // console.log(transaction._value)
            let transactionValue = transaction._value;
            total += Math.abs(transactionValue);
            if(transactionValue > 0){
                totalIncome += transactionValue;
            }
        });
    // });
    // console.log("total:", total, "totalIncome", totalIncome)
    if(total !== 0) {
        let len = (totalIncome / total) * 100;
        document.querySelector(".progress-container").querySelector(".progress-fill").style.width = (len + '%');
        document.getElementById("progress-number").style.width = ((len + 1) + '%');
        document.getElementById("progress-number").innerText = (len !== 100 && len !== 0) ? (Math.round(len * 4) / 4 + '%') : ''
    } else {
        document.querySelector(".progress-container").querySelector(".progress-fill").style.width = '0%';
        document.querySelector(".progress-bar").style.backgroundColor = '#555';
        
    }
    
}
function updatePieChart() {
    const pieColors = [
        '#0088FE', '#00C49F', '#FFBB28', '#FF8042',
        '#8884d8', '#82ca9d', '#ffc658', '#a45de0',
        '#00bfff', '#ff69b4',];
    
    let categoryNames = [];
    let transactionsValueByCategory = [];
    
    let transactions = Ctrl.getCurrAccount().transactions;
    try {
        if(transactions.length === 0) throw "Nessuna transazione"
        transactions.forEach((transaction) => {
            if (transaction._value < 0) {
                if (!categoryNames.includes(transaction._category)) {
                    categoryNames.push(transaction._category);
                    transactionsValueByCategory.push(Math.abs(transaction._value));
                } else {
                    let index = categoryNames.indexOf(transaction._category);
                    transactionsValueByCategory[index] += Math.abs(transaction._value);
                }
            }
        });
        // console.log(categoryNames, transactionsValueByCategory)
        if (transactionsValueByCategory.length === 0) throw "Nessuna transazione in uscita"
        
        let colors = [pieColors[0]];
        for (let i = 1; colors.length <= categoryNames.length; (i + 1 < pieColors.length) ? i++ : i = 0) {
            colors.push(pieColors[i]);
        }
        pieChart?.destroy();
        let ctx = document.getElementById('pieChart').getContext('2d');
        
        const data = {
            labels: categoryNames,
            datasets: [{
                data: transactionsValueByCategory,
                backgroundColor: colors,
                borderWidth: 0,
                hoverOffset: 10
            }]
        };
        
        const config = {
            type: 'doughnut',
            data: data,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '60%',
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        };
        
        pieChart = new Chart(ctx, config);
    } catch (e) {
        document.querySelector(".chart-container").innerText = e;
    }
}