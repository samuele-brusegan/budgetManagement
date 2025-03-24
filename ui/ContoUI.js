export function showConto(conto, id="conto"){
	let out = "<h3>"+conto.name+"</h3>"+
		"Value: " + conto.value+conto.currency;
	//console.log(conto.transactionList.length);
	if(conto.transactionList.length !== 0){
		out += "<br/>Transactions: <table class='table table-success'>";
		out += "<tr>"+
			"<td><b>Value</b></td>"+
			"<td><b>Tag</b></td>"+
			"<td><b>Date</b></td>"+
			"<td></td>"+
			"</tr>";
		conto.transactionList.forEach((elem, i) => {
			out+="<tr>";
			out+="<td>"+elem.value+"</td>";
			out+="<td>"+elem.type+"</td>";
			out+="<td>"+elem.date+"</td>";
			out+="<td><button class='btn btn-secondary remTransactionBtn"+conto.id+"' id='remBtn"+i+"'>X</button></td>";
			out+="</tr>";
		});
		out += "</table>";
	}
	let outDiv = document.getElementById(id);
	outDiv.innerHTML = out;
	//console.log(outDiv.innerHTML);
	let buttons = outDiv.querySelectorAll("table>tbody>tr>td>button.remTransactionBtn"+conto.id);
	//console.log(JSON.stringify(buttons));
	buttons?.forEach((btn) => {
		btn.addEventListener("click", () => {
			console.log("ID: "+btn.id)
			conto.removeTransaction(btn.id.split("remBtn")[1]);
		});
	});
}
