import * as Ctrl from "../../controllers/Controller.js";
//import {Chart} from "../../node_modules/chart.js/auto/auto.js"

let pieChart;

updateBar()
updatePieChart()

function updateBar() {
    let accList = Ctrl.getAccountList()
    accList.forEach((val) => {console.log(val)});
    
    let totalIncome = 0;
    let total = 0;
    accList.forEach((account, i) => {
        // console.log("Transactions:", account.transactions);
        account.transactions?.forEach((transaction) => {
            // console.log(transaction._value)
            let transactionValue = transaction._value;
            total += Math.abs(transactionValue);
            if(transactionValue > 0){
                totalIncome += transactionValue;
            }
        });
    });
    console.log("total:", total, "totalIncome", totalIncome)
    
    let len = (totalIncome/total)*100;
    document.querySelector(".progress-container").querySelector(".progress-fill").style.width = (len + '%');
    document.getElementById("progress-number").style.width = ((len+1) + '%');
    document.getElementById("progress-number").innerText = (len !== 100)? (Math.round(len*4)/4 + '%'):''
    
}
function updatePieChart() {
    const pieColors = ['#0088FE', '#00C49F', '#FFBB28'];
    
    let categoryNames = [];
    let transactionsValueByCategory = [];
    
    let transactions = Ctrl.getCurrAccount().transactions;
    transactions.forEach((transaction) => {
        if(transaction._value < 0){
            if(!categoryNames.includes(transaction._category)){
                categoryNames.push(transaction._category);
                transactionsValueByCategory.push(Math.abs(transaction._value));
            } else {
                let index = categoryNames.indexOf(transaction._category);
                transactionsValueByCategory[index] += Math.abs(transaction._value);
            }
        }
    });
    console.log(categoryNames, transactionsValueByCategory)
    
    let colors = [pieColors[0]];
    for (let i = 1; colors.length <= categoryNames.length; (i+1<pieColors.length)?i++:i=0) {
        colors.push(pieColors[i]);
        console.log("i",i)
    }
    console.log(colors)
    pieChart?.destroy();
    let ctx = document.getElementById('pieChart').getContext('2d');
    
    const data = {
        labels: categoryNames,
        datasets: [{
            data:            transactionsValueByCategory,
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
}