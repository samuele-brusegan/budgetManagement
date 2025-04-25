import * as Ctrl from "../../controllers/Controller.js";


if(Ctrl.getCurrAccount().id === -101) {
    document.getElementById("content").innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; flex-direction: column; margin-top: 25vh">
            <div style="font-size: 1.7rem">Crea Il Tuo Primo Conto</div>
            <div style="background: var(--colorD3); width: 75%; padding: 1em; border-radius: .5rem; justify-content: center; display: flex; margin-top: 10%;" onclick="navigateTo('newConto')">
                <img src="${CURR_BASE_DIR}assets/icons/add.svg" alt="Add" style="height: 1rem; width: 1rem;">
            </div>
        </div>
    `
    document.getElementById("lowerNavbar").outerHTML = `
        <div id="lowerNavbar">
            <div style="height: 5.5rem;"></div>
            <nav class="bottom-nav">
                <a href="#" class="nav-item" onclick="alert('Creare prima un account')">
                    <div style="">
                        <img style="width: 30px; height: 30px; filter: invert(var(--invertBoolBlack))" alt="" src="${CURR_BASE_DIR}assets/icons/transaction.svg">
                    </div>
                    <span>Transazioni</span>
                </a>
                <a href="#" class="nav-item active" onclick="alert('Creare prima un account')">
                    <div style="">
                        <img style="width: 30px; height: 30px; filter: invert(var(--invertBoolBlack))" alt="" src="${CURR_BASE_DIR}assets/icons/home.svg">
                    </div>
                    <span>Home</span>
                </a>
                <a href="#" class="nav-item" onclick="alert('Creare prima un account')">
                    <div style="">
                        <img style="width: 30px; height: 30px; filter: invert(var(--invertBoolBlack)); padding: 2px;" alt="" src="${CURR_BASE_DIR}assets/icons/boxes.svg">
                    </div>
                    <span>Inventory</span>
                </a>
            </nav>
        </div>
    `;
} else {
    let pieChart;
    
    updateBar()
    
    updatePieChart()
    
    function updateBar() {
//    let accList = Ctrl.getAccountList()
        let currAcc = Ctrl.getCurrAccount()
        
        let totalIncome = 0;
        let total = 0;
        let totalExpense = 0;
        
        currAcc.transactions?.forEach((transaction) => {
            let transactionValue = transaction._value;
            if(transactionValue < 0) {
                totalExpense += Math.abs(transactionValue);
            }
            if(transactionValue > 0){
                totalIncome += transactionValue;
            }
        });
        
        total = totalIncome+totalExpense;
        
        console.log("total:", total, "totalIncome", totalIncome)
        document.getElementById("numberRecupTotal"  ).innerText = (currAcc.currency??"€")+" "+(totalIncome-totalExpense);
        document.getElementById("numberRecupIncome" ).innerText = (currAcc.currency??"€")+" "+totalIncome;
        document.getElementById("numberRecupExpense").innerText = (currAcc.currency??"€")+" "+totalExpense;
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
                //Se è una spesa
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
            if (transactionsValueByCategory.length === 0) throw "Nessuna transazione in uscita"
            
            let colors = [pieColors[0]];
            for (let i = 1; colors.length <= categoryNames.length; (i + 1 < pieColors.length) ? i++ : i = 0) {
                colors.push(pieColors[i]);
            }
            pieChart?.destroy();
            let ctx = document.getElementById('pieChartHome').getContext('2d');
            
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
            
            let categoryList = document.getElementById("categoryList");
            categoryList.innerHTML = "";
            categoryNames.forEach((categoryName) => {
                categoryList.innerHTML += `<div>${categoryName}</div>`
            });
            
        } catch (e) {
            console.log(e)
            document.querySelector(".chart-container").innerText = e;
        }
    }
}