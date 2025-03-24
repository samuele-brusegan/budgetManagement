export function showConto(conto, id="conto"){
	document.getElementById(id+"Head").innerHTML = "<h3>"+conto.name+"</h3>";
	
	let out = "Value: " + conto.value+conto.currency;
	if(conto.transactionList.length !== 0){
		out += "<br/>Transactions: <table class='table table-success' style='border-radius: 1rem'>";
		out += "<tr>"+"<td><b>Value</b></td>"+"<td><b>Tag</b></td>"+"<td><b>Date</b></td>"+"<td></td>"+"</tr>";
		
		conto.transactionList.forEach((elem, i) => {
			out+="<tr>";
			out += "<td>"+elem.value+"</td>";
			out += "<td>"+elem.category+"</td>";
			out += "<td>"+elem.date+"</td>";
			out += "<td><button class='btn btn-secondary remTransactionBtn"+conto.id+"' id='remBtn"+i+" uid="+i+"'>X</button></td>";
			out+="</tr>";
		});
		out += "</table>";
	}
	let outDiv = document.getElementById(id+"Body");

	outDiv.innerHTML = out;

	let buttons = outDiv.querySelectorAll("table>tbody>tr>td>button.remTransactionBtn"+conto.id);

	buttons?.forEach((btn) => {
		btn.addEventListener("click", () => {
			conto.removeTransaction(btn.getAttribute("uid"));
		});
	});
}
